/*

 o state é atibuto e modificadores do game.

 input = moficações feitas mediante ação do jogador

 gameRoutine = modificações feitas conforme a regra do jogo

*/
import Control from './Control.js'

function input(state, type, mod) {

    Control(state, 'bar', mod)
}

function gameRoutine(type, mod) {

}

export default {
    input
}