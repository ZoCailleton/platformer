import Game from "./Game";

export default class Player {

  constructor() {

    this.game = new Game();

    this.player = {
      x: 100,
      y: 100
    }

    this.width = 100;
    this.height = 100;

    this.draw();
    
  }

  draw() {
    this.game.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

}

const player = new Player();
player.draw();
