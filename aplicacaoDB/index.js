const http = require('http')
const porta = process.env.PORT || 3000
const fs = require('fs')

const servidor = http.createServer((req, res)=>{
    fs.readFile('crud.html',(err, arquivo)=>{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(arquivo)
        return res.end()
    })
})

servidor.listen(porta,()=>console.log('Manda bala'))