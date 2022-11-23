import Player from './Player'
import EventListener from './EventListener'
import Sprite from './Sprite'
//import { collisionBlocks } from '../data/collisions'

let instance = null

export default class Game {

	constructor(canvas) {

		if(instance != null) {
			return instance
		}
		
		instance = this

		this.sizes = {
			width: 0,
			height: 0
		}

		this.canvas = canvas
		this.context = this.canvas.getContext('2d')

		this.context.fillStyle = 'white'
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

		this.backgroundLevel1 = new Sprite({
			position: {
				x: 0,
				y: 0
			},
			imageSrc: './assets/backgroundLevel1.png'
		})

		this.player = new Player()

		this.keys = {
			top: {
				pressed: false
			},
			left: {
				pressed: false
			},
			right: {
				pressed: false
			}
		}

		new EventListener()

		this.updateSizes()

		this.tick()

	}

	updateSizes() {

		this.sizes.width = window.innerWidth
		this.sizes.height = window.innerHeight

		this.canvas.width = this.width
		this.canvas.height = this.height

	}

	tick() {

		window.requestAnimationFrame(() => {
			this.tick()
		})
		this.context.fillStyle = 'white'
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

		this.backgroundLevel1.draw()

		this.player.velocity.x = 0
		if(this.keys.left.pressed) this.player.velocity.x = -5
		else if(this.keys.right.pressed) this.player.velocity.x = 5

		this.player.draw()
		this.player.update()

	}

}
