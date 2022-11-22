import Game from "../Game/Game"

const collisionsLevel1 = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

Array.prototype.parse2D = function() {
  const rows = []
	for(let i=0; i<this.length; i+=16) {
		rows.push(this.slice(i, i+16))
	}
	return rows
}

class CollisionBlock {

	constructor({ position }) {
		this.game = new Game()
		this.position = position
		this.width = 64
		this.height = 64
	}

	draw() {
		this.game.context.fillStyle = 'red'
		this.game.context.fillRect(this.position.x, this.position.y, this.width, this.height)
	}

}

export const collisionBlocks = []

const parsedCollisions = collisionsLevel1.parse2D()
parsedCollisions.forEach((row, y) => {
	row.forEach((symbol, x) => {
		if(symbol === 292) {
			collisionBlocks.push(
				new CollisionBlock({
					position: {
						x: x * 64,
						y: y * 64
					}
			}))
		}
	})
})
