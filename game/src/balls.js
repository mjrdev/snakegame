
function createdBall(state) {
    
    const PROP = 0.04
    let ballSize = PROP * state.config.boxSize
    let ball = { x: 250, y: 0}

    return {
        ballSize, ballPos: ball
    }
}

function moveBall(state, toMove) {
    let { balls } = state

    balls[0].y+=toMove

    if(state.balls[0].y > state.config.boxSize + toMove) {
        state.balls[0].y = 0 - toMove
    }

    return balls[0]
}

export default { createdBall, moveBall}