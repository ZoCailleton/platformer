let instance = null;

export default class Game {

  constructor(canvas) {

    if(instance != null) {
      return instance;
    }

    instance = this;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    
  }
  
}
