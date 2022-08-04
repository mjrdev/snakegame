function Phy(state, g) {

    let { bar, balls, barSizer, ballSize } = state

    if(
        balls[0].y < 0 - ballSize * 2 && state.direction == 1
    ) {
        state.direction = 0
    }

    if(balls[0].y + ballSize / 2 >= bar.y[0]) {
        state.direction = 1
    }

    if(state.direction) {
        return {
            toMove: -10
        }
    } else {
        return {
            toMove: 10
        }
    }

}

export default Phy