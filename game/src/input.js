import { state } from '../engine.js'
import render from '../render/index.js'

import inputTypes from './inputTypes.json' assert {type: 'json'};

const sizes = {
    barMoveSize: 20
}

function input(elementToUpdate, type) {

    const data = state.getState()

    const elements = { bar, dif }

    if(inputTypes[type] === undefined) {
        console.log('no keys')
    } else {
        elements[elementToUpdate][inputTypes[type]](data)
    }
}

const bar = {
    moveLeft: function(data) {
        const bar = data.bar

        bar.position = {
            x: bar.position.x - sizes.barMoveSize,
            x2: bar.position.x2 - sizes.barMoveSize,
            y: bar.position.y,
            y2: bar.position.y2
        }

        state.update(bar)
    },
    moveRight: function(data) {
        let bar = data.bar

        

        bar.position = {
            x: bar.position.x + sizes.barMoveSize,
            x2: bar.position.x2 + sizes.barMoveSize,
            y: bar.position.y,
            y2: bar.position.y2
        }

        state.update(bar)
    }
}

const dif = {
    up: function(data) {
        console.log('left')
    }
}

export default input