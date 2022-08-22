window.log = (ct) => console.log(ct)

import { run, state } from './enginer.js'
function Game(config) {

    const { boxSize, barMove } = config

    /*  a função "init" no final do código controla os dados iniciais
        e desenhos a serem feitos antes da partida se iniciar */

    function init(config) {
        const canvas = document.querySelector('#game')
    
            canvas.width = config.boxSize
            canvas.height = config.boxSize
    
        const ctx = canvas.getContext('2d')

        let { barSize, barMove, barArea } = preRender(ctx)

        const stateConfig = {
            config, frame: ctx,
            game: {
                speed: 1
            },
            balls: [
                {   
                    ballPosition: { x: 20, y: 0 },
                    ballSize: 20
                }
            ],
            ballsN: 1,
            ball: [],
            ballSize: 0,


            barSize,
            barMove,
            bar: barArea,


            direction: 0
        }

        run(stateConfig)
    }

    // renderização de objetos da tela inicial do game
    function preRender(ctx) {
        const barSize = [70, 10]
        const barPosInitial = [boxSize / 2 - barSize[0] / 2, boxSize * 0.92]
        const barArea = {
            x: [barPosInitial[0], barPosInitial[0]+barSize[0]],
            y: [boxSize - barSize[1] * 2, boxSize - barSize[1]]
        }

        config.barArea = barArea


        ctx.fillStyle = 'black'
        ctx.fillRect(barPosInitial[0], barPosInitial[1], barSize[0], barSize[1])

        return { barMove, barSize, barArea }
    }
    
    return init(config)
}

// chama função responsavel por criar o game, repasse os parametros necessário
// box-size: tamanho do display em pixels
const game = Game({
    boxSize: 300,
    barMove: 20,
    fps: 45
})