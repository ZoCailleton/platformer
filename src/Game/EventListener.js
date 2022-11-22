import Game from "./Game"

export default class EventListener {
	constructor() {

		this.game = new Game()

		window.addEventListener('keydown', e => {
			switch(e.key) {
				case 'ArrowUp':
					if(this.game.player.velocity.y === 0) this.game.player.velocity.y = -20
					break
			case 'ArrowLeft':
					this.game.keys.left.pressed = true
					break
			case 'ArrowRight':
					this.game.keys.right.pressed = true
					break
			case 'ArrowDown':
					console.log(e.key)
					break
			}
		})
		
		window.addEventListener('keyup', e => {
			switch(e.key) {
				case 'ArrowLeft':
					this.game.keys.left.pressed = false
					break
			case 'ArrowRight':
					this.game.keys.right.pressed = false
					break
			}
		})
	}
}
