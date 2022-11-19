import './styles/style.scss'

const canvas = document.getElementById('game')
const c = canvas.getContext('2d')

canvas.width = 64 * 16
canvas.height = 64 * 9

c.fillStyle = 'white'
c.fillRect(0, 0, canvas.width, canvas.height)

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.width = 100
    this.height = 100
  }
}

let y = 100
const height = 100
let bottom = y + 100

const tick = () => {

  window.requestAnimationFrame(tick)

  c.fillStyle = 'white'
  c.fillRect(0, 0, canvas.width, canvas.height)

  c.fillStyle = 'red'
  c.fillRect(100, y, 100, height)

  if(bottom < canvas.height) {
    y++
  }

  y++

}

tick()
