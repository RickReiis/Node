const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server=http.createServer((req, res)=>{
    fs.appendFile('teste.txt','Arquivo de texto gerado',(err)=>{
        if(err)throw err
        console.log('Arquivo criado')
        res.end()
    })
})

server.listen(porta||3000, ()=>{console.log('Server rodando')})