import render from './render.js'
import control from './src/Control.js'
import Ball from '/src/balls.js'
import Phy from './physical.js'
import input from './src/input.js'

import State from './src/State.js'

function run(dataState) {

    const state = {
        data: dataState,
        observers: []
    }

    function subscribeObserver(observerFunction) {

        const multObsFunctions = (observes) => {
            for(obs of observers) {
                state.observers.push(obs)
            }
        }

        const singleObsFunction = (observer) => {
            state.observers.push(observer)
        }

        Array.isArray(observerFunction) == true ? multObsFunctions(observerFunction) : singleObsFunction(observerFunction) 
    }

    function runObservers() {
        //console.log(`Notifying ${state.observers.length} observers`)

        for(let observerFunction of state.observers) {
            const data = state.dataState
            
            observerFunction()
        }
    }

    const observers = input

    subscribeObserver(observers)


    //subscribeObserver(input)

    let GAME_SPEED = 0
    window.GAME_RUN = true

    // movimentação balls AUTO

   let ball = Ball.createdBall(state.data)
   state.data.ballSize = ball.ballSize
   state.data.balls.push(ball.ballPos)

    // < ---------------> //

    // movimentação da barra MANUAL

    function controlForGame (logKey) {
    
        State.input(state.dataState, {
            element: 'bar', action: logKey.key
        })
    }
    
    document.addEventListener("keydown", () => {
        control(state.data, { element:'bar', action:'moveLeft'})
        console.log()
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
        let phyMod = Phy(state.data)

        state.data.balls[0] = Ball.moveBall(state.data, phyMod.toMove)

        GAME_SPEED+=1
        render(null, state.data, GAME_SPEED)
        runObservers()
    }, 1000 / state.data.config.fps)
}

export default run