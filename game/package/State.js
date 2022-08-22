/*

 o state é atibuto e modificadores do game.

 input = moficações feitas mediante ação do jogador

 gameRoutine = modificações feitas conforme a regra do jogo

*/

import { state } from "../enginer.js"
import Phy from "../physical/physical.js"

function State(data) {
    return {
        data,
        init: function() {
            Phy()
        },
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

export default State