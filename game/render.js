import { state } from './enginer.js'
import ball from './render/renderBall.js'

function render () {

    const data = state.getState()

    const { frame, balls } = data

                let code = document.querySelector('#right')
                code.innerHTML = JSON.stringify(data, null, 1)

    let canvasSize = data.config.box.size
    frame.clearRect(0,0,canvasSize, canvasSize)


    // render bar

    frame.fillStyle = 'black'
    frame.fillRect(data.bar.x[0], data.bar.y[0], data.barSize[0], data.barSize[1])

    // new render ball

    

    ball()
    
    //statistics
    setTimeout(() => {
        let icon = document.querySelector('#icon')
        icon.style.backgroundColor = 'green'
    }, 100)

    let icon = document.querySelector('#icon')
    icon.style.backgroundColor = 'white'
}

export default render