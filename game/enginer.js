import render from './render.js'
import control from './src/Control.js'
import Ball from '/src/balls.js'
import Phy from './physical.js'

import State from './src/State.js'

function run(state) {

    let GAME_SPEED = 0
    window.GAME_RUN = true

    // movimentação da barra MANUAL

    function controlForGame (logKey) {
    
        State.input(state, 'bar', logKey.key)
        
    }



    // movimentação balls AUTO

   let ball = Ball.createdBall(state)
   state.ballSize = ball.ballSize
   state.balls.push(ball.ballPos)

    // < ---------------> //
    
    document.addEventListener("keydown", controlForGame)

    function statistics(s) {
        let code = document.querySelector('#right')
        code.innerHTML = JSON.stringify(s)
    }

    const time = setInterval(() => {

        if(!window.GAME_RUN) {
            clearInterval(time)
        }

        statistics(state)

        // atualização ball
        let phyMod = Phy(state)

        state.balls[0] = Ball.moveBall(state, phyMod.toMove)

        GAME_SPEED+=3
        render(null, state, GAME_SPEED)
    }, 1000 / state.config.fps)
}

export default run