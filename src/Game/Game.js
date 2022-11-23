import Player from './Player'
import EventListener from './EventListener'
import Platform from './Platform'

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

		this.scrollOffset = 0

		this.canvas = canvas
		this.context = this.canvas.getContext('2d')

		this.context.fillStyle = 'white'
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)

		const image = new Image()
		image.src = './assets/platform.png'

		this.player = new Player()
		this.platforms = [
			new Platform({x: image.width, y: 450, image}),
			new Platform({x: 500, y: 200, image}),
		]

		this.keys = {
			left: {
				pressed: false
			},
			right: {
				pressed: false
			}
		}

		new EventListener()

		this.updateSizes()

		window.addEventListener('resize', () => {
			this.updateSizes()
		})

		this.tick()

	}

	updateSizes() {

		this.sizes.width = window.innerWidth
		this.sizes.height = window.innerHeight

		this.canvas.width = this.sizes.width
		this.canvas.height = this.sizes.height

		this.canvas.style.width = this.sizes.width
		this.canvas.style.height = this.sizes.height
		this.canvas.style.backgroundColor = '#aaa'

	}

	tick() {

		requestAnimationFrame(() => {
			this.tick()
		})

		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)

		this.player.update()

		this.platforms.forEach(platform => {
			platform.draw()
		})

		if(this.keys.left.pressed && this.player.position.x > 100) {
			this.player.velocity.x = -this.player.speed
		} else if(this.keys.right.pressed && this.player.position.x < 400) {
			this.player.velocity.x = this.player.speed
		} else {
			this.player.velocity.x = 0
			
			if(this.keys.right.pressed) {
				this.scrollOffset += 5
				this.platforms.forEach(platform => {
					platform.position.x -= 5
				})
			} else if(this.keys.left.pressed) {
				this.scrollOffset -= 5
				this.platforms.forEach(platform => {
					platform.position.x += 5
				})
			}
		}

		// Platform detection
		this.platforms.forEach(platform => {
			
			if(
				this.player.position.y + this.player.height <= platform.position.y
				&& this.player.position.y + this.player.height + this.player.velocity.y >= platform.position.y
				&& this.player.position.x + this.player.width >= platform.position.x
				&& this.player.position.x <= platform.position.x + platform.width
			) {
				this.player.velocity.y = 0
			}
			
		})

		if(this.scrollOffset > 2000) {
			console.log('You win')
		}

	}

}
