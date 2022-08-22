import { state } from '../enginer.js'

function createdBall() {
    console.log('criar ball')
}

function moveBall() {

    const data = state.getState()
    const ball = data.balls[0]

    const config = {
        balls: [
            {
                ballSize: 15,
                ballPosition: { x: ball.ballPosition.x, y: ball.ballPosition.y + 6 }
            }
        ]
    }

    state.update(config)

    return
}

export default { createdBall, moveBall}