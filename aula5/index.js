const express = require('express')
const rotas = require('./rotas/rotas.js')
const portas = process.env.PORT || 3000

const app=express()

app.use('/',rotas)

app.get('*',(req,res)=>{
    res.send('Aprendendo Node')
})
app.listen(portas, ()=>{console.log('Servidor rodando')})
