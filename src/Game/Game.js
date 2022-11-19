import Player from './Player'

let instance = null

export default class Game {

	constructor(canvas) {

		if(instance != null) {
			return instance
		}
		
		instance = this

		this.canvas = canvas
		this.context = this.canvas.getContext('2d')

		this.canvas.width = 64 * 16
		this.canvas.height = 64 * 9

		this.context.fillStyle = 'white'
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

		this.player = new Player()

		this.tick()

		window.addEventListener('keydown', e => {
			switch(e.key) {
				case 'ArrowUp':
					if(this.player.velocity.y === 0) this.player.velocity.y = -20
					break
				case 'ArrowDown':
					console.log(e.key)
					break
			}
		})

	}

	tick() {

		window.requestAnimationFrame(() => {
			this.tick()
		})
		this.context.fillStyle = 'white'
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

		this.player.draw()
		this.player.update()

	}

}
