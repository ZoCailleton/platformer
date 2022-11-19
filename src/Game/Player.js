import Game from "./Game"

export default class Player {

  constructor() {

    this.game = new Game()

    this.width = 100
    this.height = 100
    this.gravity = 1

    this.position = {
      x: 100,
      y: 100
    }

    this.velocity = {
      x: 0,
      y: 0
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

    this.position.y += this.velocity.y
    this.sides.bottom = this.position.y + this.height

    if(this.sides.bottom + this.velocity.y < this.game.canvas.height) {
      this.velocity.y += this.gravity
    } else {
      this.velocity.y = 0
    }

  }

}