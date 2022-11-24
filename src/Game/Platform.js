import Game from "./Game"

export default class Platform {

	constructor({ x, y, image }) {

		this.game = new Game()

		this.position = {
			x,
			y
		}

		this.image = image
		console.log(image)
		this.width = this.image.width
		this.height = this.image.height

	}
	
	draw() {

		this.game.context.drawImage(this.image, this.position.x, this.position.y)
	}

}
