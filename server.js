const express = require('express')

const app = express()

const path = require('path')

app.use(express.static('game'))

app.get('/', (req, res) => {

})

app.listen('3000', () => {
    console.log('Servidor online em http://localhost:3000')
})