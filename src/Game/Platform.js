import Game from "./Game"

export default class Platform {

	constructor({x, y, image}) {

		this.game = new Game()

		this.position = { x, y }

		this.width = 200
		this.height = 50

		this.image = image

	}
	
	draw() {

		this.game.context.drawImage(this.image, this.position.x, this.position.y)
	}

}
