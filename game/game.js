import { engine, state } from './engine.js'

function Game(screenX, screenY) {

    const state = {}

    function init(screenX, screenY) {
        const config = {
            screenX, screenY
        }
        const canvas = document.querySelector('#game')
        const ctx = canvas.getContext('2d')

        ctx.fillStyle = 'black';
        ctx.fillRect(1, 1, 1, 1)

        console.log('ok');

        state = state(ctx)
    }

    function run() {

        snake.move()
        validade()
        action()
        render()
    }

    init()
}

const size = 400
const game = Game(300, 300)