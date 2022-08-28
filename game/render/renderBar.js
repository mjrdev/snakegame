import { state } from '../enginer.js'

const boxColl = () => {
    const { bar, frame } = state.getState()    

    frame.strokeStyle = 'red'
    frame.strokeRect(bar.position.x, bar.position.y, bar.size.w, bar.size.h)
}

export default function(box) {
    const { bar, frame } = state.getState()

    if(box) boxColl()

    frame.fillStyle = 'black'
    frame.fillRect(bar.position.x, bar.position.y, bar.size.w, bar.size.h)
}