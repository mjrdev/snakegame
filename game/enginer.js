import render from './render.js'
import Control from './src/Control.js'
import Phy from './physical/physical.js'
import input from './src/input.js'

import State from './package/State.js'

let state = State()

function run(dataState) {

    state = State(dataState)

    /*

    const observers = []

    function subscribeObserver(observerFunction) {

        const multObsFunctions = (observerFunctions) => {
            for(let obs of observerFunctions) {
                
                observers.push(obs)
            }
        }

        const singleObsFunction = (observer) => {
            observers.push(observer)
        }

        Array.isArray(observerFunction) == true ? multObsFunctions(observerFunction) : singleObsFunction(observerFunction) 
    }

    function runObservers() {
        //console.log(`Notifying ${observers.length} observers`)

        for(let observerFunction of observers) {
            
            observerFunction()
        }
    }

    const observerToRun = []
    subscribeObserver(observerToRun)
    */

    let GAME_SPEED = 0
    window.GAME_RUN = true

    /* movimentação balls AUTO

   let ball = Ball.createdBall(state.data)
   state.data.ballSize = ball.ballSize
   state.data.balls.push(ball.ballPos) */

    // < ---------------> //

    // movimentação da barra MANUAL
    
    document.addEventListener("keydown", (event) => {
        input('bar', event.key)
    })

    function statistics(s) {
        let code = document.querySelector('#right')
        code.innerHTML = JSON.stringify(s)
    }

    const time = setInterval(() => {

        if(!window.GAME_RUN) {
            clearInterval(time)
        }

        statistics(state.data)
        

        // atualização ball
        //let phyMod = Phy(state.data)

        //state.data.balls[0] = Ball.moveBall(state.data, phyMod.toMove)

        GAME_SPEED+=1
        Phy()
        render(state.data, 0)
    }, 1000 / state.data.config.fps)
}

export { run, state }