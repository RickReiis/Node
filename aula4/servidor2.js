const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (req, res)=>{
    res.send('Express')
})
app.get('/canal', (req, res)=>{
    res.json({canal:'Ricks games'})
})
app.listen(porta || 4000, ()=>{console.log('Servidor ta on')})