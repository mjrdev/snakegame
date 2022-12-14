import { state } from '../enginer.js'

function createdBall(id, ballSize, ballPosition, direction) {
    return {
        id, ballSize, ballPosition, direction
    }
}

function moveBall() {

    const data = state.getState()
    const balls = data.balls

    const config = {
        balls: []
    }

    for(let ball of balls) {

        let ballx = ball.ballPosition.x + (7 + ball.mass) * ball.direction.x
        let bally = ball.ballPosition.y + (2 + ball.mass) * ball.direction.y

        config.balls.push({
            _id: 'ball',
            ballSize: ball.ballSize,
            ballPosition: {
                x: ballx, y: bally,
                w: ballx + ball.ballSize, h: bally + ball.ballSize
            },
            direction: {
                x: ball.direction.x, y: ball.direction.y
            },
            mass: ball.mass 
        })
    }

    //console.log(config.balls[0]);
    state.update(config)

    return
}

export default { createdBall, moveBall }