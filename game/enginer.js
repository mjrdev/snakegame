import render from './render/index.js'
import Phy from './physical/physical.js'
import input from './src/input.js'

import State from './package/State.js'

let state = State()

function run(dataState) {

    state = State(dataState)

    let GAME_SPEED = 0
    window.GAME_RUN = true

    // movimentação da barra MANUAL
    
    document.addEventListener("keydown", (event) => {
        input('bar', event.key)
    })

    let t = 0

    const time = setInterval(() => {

        if(!window.GAME_RUN) {
            clearInterval(time)
        }
        

        // atualização ball
        //let phyMod = Phy(state.data)

        //state.data.balls[0] = Ball.moveBall(state.data, phyMod.toMove)

        GAME_SPEED+=1
        state.init()
        render(state.data)

        t++
        if(t >= 5000) {
            window.GAME_RUN = false
        }
    }, 1000 / state.data.config.fps)
}

export { run, state }