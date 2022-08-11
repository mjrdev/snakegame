import render from '../render.js'
//import rules from './rules.js'

/* control só pode alterar o elemento Bar */

const control = (state, element, action) => {

    let oldState = state

    const commands = {
        bar: {
            moveLeft: () => {
                state.bar.x[0] -= state.barSpeed
                state.bar.x[1] -= state.barSpeed
            },
            moveRight: () => {
                state.bar.x[0] += state.barSpeed
                state.bar.x[1] += state.barSpeed
            },                    
        }
    }

    let cmd = commands[element]
    cmd[action]()

    render(oldState, state)
}

export default control