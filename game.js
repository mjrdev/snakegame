window.log = (ct) => console.log(ct)

import render from './render.js'
import control from './src/control.js'
import Ball from '/src/balls.js'
import Phy from './physical.js'

function Game(config) {

    const { boxSize, barSpeed } = config

    /*  a função "init" no final do código controla os dados iniciais
        e desenhos a serem feitos antes da partida se iniciar */

    function init(config) {
        const canvas = document.querySelector('#game')
    
            canvas.width = config.boxSize
            canvas.height = config.boxSize
    
        const ctx = canvas.getContext('2d')

        let { barSize, barSpeed, barArea } = preRender(ctx)

        const state = {
            config,
            frame: ctx,
            speed: 1,

            ballsN: 1,
            balls: [],
            ballSize: 0,


            barSize: 0,
            barSize,
            barSpeed,
            bar: barArea,


            direction: 0
        }

        log('<----- GAME CARREGADO COM SUCESSO! ----->')
                        /* LOG GAME */
        return run(state)
    }

    // renderização de objetos da tela inicial do game
    function preRender(ctx) {
        const barSize = [0.18 * boxSize, 0.03 * boxSize]
        const barPosInitial = [boxSize / 2 - barSize[0] / 2, boxSize * 0.92]
        const barArea = {
            x: [barPosInitial[0], barPosInitial[0]+barSize[0]],
            y: [barPosInitial[1], barPosInitial[1]+barSize[1]]
        }

        config.barArea = barArea


        ctx.fillStyle = 'black'
        ctx.fillRect(barPosInitial[0], barPosInitial[1], barSize[0], barSize[1])

        return { barSpeed, barSize, barArea }
    }
    
    return init(config)
}


function run(state) {

    let GAME_SPEED = 0
    window.GAME_RUN = true

    // movimentação da barra MANUAL

    function controlForGame (logKey) {
    
        if(logKey.key == 'ArrowLeft') {
            control(state, 'bar', 'moveLeft')
        } else {
            control(state, 'bar', 'moveRight')
        }
        
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

// chama função responsavel por criar o game, repasse os parametros necessário
// box-size: tamanho do display em pixels
const game = Game({
    boxSize: 500,
    barSpeed: 20,
    fps: 45
})