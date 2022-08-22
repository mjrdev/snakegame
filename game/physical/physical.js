import { state } from '../enginer.js'
import balls from '../src/balls.js'

// plugins
import frame from './plugins/frame.js'

function Phy() {

    const data = state.getState()

    const observerToRun = [balls.moveBall]
    const props = {
        observers: observerToRun,
        blocks: [],
        entities: ['ball'],
        plugins: null
    }

    frame(props)

    const observers = []

    function subscribeObserver(observerFunction) {

        const multObsFunctions = (observerFunctions) => {
            for(let obs of observerFunctions) {
                
                observers.push(obs)
            }
        }
        const singleObsFunction = (observer) => {
            observers.push(observer)
        }

        Array.isArray(observerFunction) == true ? multObsFunctions(observerFunction) : singleObsFunction(observerFunction) 
    }

    function runObservers() {
        //console.log(`Notifying ${observers.length} observers`)
        for(let observerFunction of observers) {
            
            observerFunction()
        }
    }
    subscribeObserver(observerToRun)
    runObservers()
}

export default Phy