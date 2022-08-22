import { state } from '../enginer.js'
import render from '../render.js'

import inputTypes from './inputTypes.json' assert {type: 'json'};

const sizes = {
    barMoveSize: 20
}

function input(elementToUpdate, type) {

    const data = state.getState()

    const elements = { bar, dif }

    if(inputTypes[type] === undefined) {
        console.log('no')
    } else {
        elements[elementToUpdate][inputTypes[type]](data)
    }
}

const bar = {
    moveLeft: function(data) {
        let databar = data.bar

        const modify = {
            bar: {
                x: [
                    databar.x[0] - sizes.barMoveSize, databar.x[1] - sizes.barMoveSize
                ],
                y: [
                    databar.y[0], databar.y[1]
                ]
            }
        }

        state.update(modify)
    },
    moveRight: function(data) {
        let databar = data.bar

        const modify = {
            bar: {
                x: [
                    databar.x[0] + sizes.barMoveSize, databar.x[1] + sizes.barMoveSize
                ],
                y: [
                    databar.y[0], databar.y[1]
                ]
            }
        }

        state.update(modify)
    }
}

const dif = {
    up: function(data) {
        console.log('left')
    }
}

export default input