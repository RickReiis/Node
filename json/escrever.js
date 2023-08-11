const express = require('express')
const fetch = require('fetch').fetchUrl

const rota = express.Router()
rota.get('/',(req,res)=>{
  fetch("https://jsonplaceholder.typicode.com/users", function(error, meta, body){
    body = JSON.parse(body)
    res.status(200).json(
      body
    )
})
})

module.exports = rota;