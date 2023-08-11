const http = require('http')
const porta = process.env.PORT

const servidor = http.createServer((req, res)=>{
    res.statusCode(200)
    res.writeHead({'Content-Type':'text/html'})
    res.end('Express')
}) 

servidor.listen(porta || 3000, ()=>{console.log('Servidor ta on')})