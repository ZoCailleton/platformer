import Game from "./Game"

export default class Platform {

	constructor() {

		this.game = new Game()

		this.position = {
			x: 200,
			y: 100
		}
		this.width = 200
		this.height = 20
	}
	
	draw() {

		this.game.context.fillStyle = 'blue'
		this.game.context.fillRect(
			this.position.x,
			this.position.y,
			this.width,
			this.height
		)
	}

}
