function render (pre, state, gs) {

    const { frame } = state

                let code = document.querySelector('#right')
                code.innerHTML = JSON.stringify(state)

    frame.reset()


    // render bar

    frame.fillStyle = 'black'
    frame.fillRect(state.bar.x[0], state.bar.y[0], state.barSize[0], state.barSize[1])

    // render balls

    frame.beginPath();
    frame.arc(state.balls[0].x, state.balls[0].y, state.ballSize, 0, Math.PI*2);
    frame.fill();
    
    //statistics
    setTimeout(() => {
        let icon = document.querySelector('#icon')
        icon.style.backgroundColor = 'green'
    }, 100)

    let icon = document.querySelector('#icon')
    icon.style.backgroundColor = 'white'
}

export default render