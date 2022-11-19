import Game from "./Game"

export default class Player {

  constructor() {

    this.game = new Game()

    this.width = 100
    this.height = 100

    this.position = {
      x: 100,
      y: 100
    }

    this.sides = {
      bottom: this.position.y + this.height
    }

  }

  draw() {
    this.game.context.fillStyle = 'red'
    this.game.context.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    if(this.sides.bottom < this.game.canvas.height) {
      this.position.y++
      this.sides.bottom = this.position.y + this.height
    }
  }

}