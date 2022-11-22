import Game from "./Game"

export default class Sprite {

	constructor({ position, imageSrc }) {
		this.game = new Game()
		this.position = position
		this.image = new Image()
		this.image.onload = () => {
			this.loaded = true
		}
		this.image.src = imageSrc
		this.loaded = false
	}

	draw() {
		this.game.context.drawImage(this.image, this.position.x, this.position.y)
	}

}
