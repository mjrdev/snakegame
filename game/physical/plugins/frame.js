import { state } from '../../enginer.js'

export default function (props) {
    const data = state.getState()
    const block = data.config.box
    const entitiesKeys = props.entities
    
    const balls = data.balls

    for(let ball of balls) {

        const blocked = {
            up: block.position['y2'],
            down: block.position['y'],
            right: block.position['x'],
            left: block.position['x2']
        }

        const expBalls = {
            up: ball.ballPosition['h'] > blocked.up - ball.ballSize,
            down: ball.ballPosition['y'] < blocked.down,
            right: ball.ballPosition['x'] < blocked.right,
            left: ball.ballPosition['w'] > blocked.left - ball.ballSize
        }

        if(expBalls.up) {

            ball.direction.y = -1
            state.update({ balls })
        }
        if(expBalls.down) {

            ball.direction.y = 1
            state.update({ balls })
        }

        if(expBalls.right) {

            ball.direction.x = 1
            state.update({ balls })
        }

        if(expBalls.left) {

            ball.direction.x = -1
            state.update({ balls })
        }
    }

    /*
    const bar = data.bar


    if(bar.position.x <= block.position.x) {
        console.log('passou')
    }
    if(bar.position.x2 >= block.position.x2) {
        console.log('toque right')
    } */
}