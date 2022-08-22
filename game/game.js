
import { run, state } from './enginer.js'
function Game(config) {

    const { box, barMove } = config

    /*  a função "init" no final do código controla os dados iniciais
        e desenhos a serem feitos antes da partida se iniciar */

    function init(config) {
        const canvas = document.querySelector('#game')
    
            canvas.width = config.box.size
            canvas.height = config.box.size
    
        const ctx = canvas.getContext('2d')

        let { barSize, barMove, barArea } = preRender(ctx)
        let ballSize = 15

        const stateConfig = {
            config, frame: ctx,
            game: {
                speed: 1
            },
            balls: [
                {   
                    _id: 'ball-01',
                    ballPosition: { x: 0, y: 0, w: ballSize, h: ballSize},
                    ballSize,
                    direction: { x: 0, y: 1}
                },
                {
                    _id: 'ball-02',
                    ballPosition: { x: 140, y: 0, w: ballSize, h: ballSize},
                    ballSize,
                    direction: { x: 0, y: -1}
                }
            ],
            ballsN: 1,
            ball: [],
            ballSize,


            barSize,
            barMove,
            bar: barArea,


            direction: 1
        }

        run(stateConfig)
    }

    // renderização de objetos da tela inicial do game
    function preRender(ctx) {
        const barSize = [70, 10]
        const barPosInitial = [box.size / 2 - barSize[0] / 2, box.size * 0.92]
        const barArea = {
            x: [barPosInitial[0], barPosInitial[0]+barSize[0]],
            y: [box.size - barSize[1] * 2, box.size - barSize[1]]
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
const size = 300
const game = Game({
    box: {
        size: 300,
        position: {
            x: 0, y: 0, w: size, h: size,
        },
        size2d: {
            x: size, y: size
        }
    },
    barMove: 20,
    fps: 45
})