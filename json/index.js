const express = require('express')
const rotas = require('./escrever.js')
const porta = process.env.PORT || 3000

const app = express()

app.use('/', rotas)

app.get('*',(req, res)=>{
    res.send('OK')
})
app.listen(porta, ()=>{console.log('Rodando')})