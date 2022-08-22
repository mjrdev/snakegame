import state from '../package/State.js'
import render from '../render.js'
import balls from '../src/balls.js'

// plugins
import frame from './plugins/frame.js'

function Phy() {
    const props = {
        plugins: []
    }
    balls.moveBall()
}

export default Phy