import { state } from '../enginer.js'

const boxColl = () => {
    const { balls, frame } = state.getState()    

    for(let ball of balls) {
        frame.strokeStyle = 'red'
        frame.strokeRect(
            ball.ballPosition.x,
            ball.ballPosition.y,
            ball.ballSize * 2, ball.ballSize * 2
        )
    }
}

export default function(box) {

    if(box) boxColl()

    const { balls, frame } = state.getState()

    for(let ball of balls) {
        frame.beginPath();
            frame.arc(
            ball.ballPosition.x + ball.ballSize,
            ball.ballPosition.y + ball.ballSize,
            ball.ballSize,
            0, Math.PI*2
        );
        frame.fill();
    }
}