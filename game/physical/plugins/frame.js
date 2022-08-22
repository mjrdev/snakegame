import { state } from '../../enginer.js'

export default function (props) {
    const data = state.getState()
    const block = data.config.box
    const entitiesKeys = props.entities

    const ball = data.balls[0]

    const entities = [ball]

    const expre = ball.ballPosition.y + 15 >= block.size
    const expre2 = ball.ballPosition.y - 15 <= block.size - block.size

    const expres = {
        collision: ball.ballPosition.y + 15 > block.size,
        collision:ball.ballPosition.y - 15 < block.size - block.size, 
    }

    const expr = () => {
        for(let entity of entities) {
            
        }
    }

    function ident() {

        for(let i in ball.ballPosition) {

            if(ball.ballPosition['y'] < block.position['y']) {
                state.update({ direction: 1 })
            }

            if(ball.ballPosition['h'] > block.position['h'] - ball.ballSize) {

                state.update({ direction: -1 })
            }
        }
        return 
    }

    //console.log(ident());
    ident()
}