/*

 o state é atibuto e modificadores do game.

 input = moficações feitas mediante ação do jogador

 gameRoutine = modificações feitas conforme a regra do jogo

*/

function gameState(data) {
    return {
        data,
        getState: function () {

            return this.data
        },
        setState: function (props={}) {

            this.data = props
        },
        update: function (props={}) {
            
            Object.assign(this.data, props)

            return this.data
        }
    }
}

export default gameState