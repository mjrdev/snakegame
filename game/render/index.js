import { state } from '../engine.js'
import ball from './renderBall.js'
import bar from './renderBar.js'

function render () {

    const data = state.getState()

    const st = {
        balls: data.balls,
        bar: data.bar
    }
    //document.getElementById("right").innerHTML = JSON.stringify(st, null, 2)

    const { frame, balls } = data

    let canvasSize = data.config.box.size
    frame.clearRect(0,0,canvasSize, canvasSize)

    const boxCollision = false
    // render bar
    bar(boxCollision)

    // new render ball
    ball(boxCollision)
}

export default render