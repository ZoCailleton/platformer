import Game from "./Game"

export default class Sprite {

	constructor({position}) {
		this.game = new Game()
		this.position = position
		this.image = new Image()
		this.image.src = './assets/backgroundLevel1.png'
	}

	draw() {
		this.game.context.drawImage(this.image, this.position.x, this.position.y)
	}

}
