const http=require('http')
const eventos = require('events')
const EventoEmissor = new eventos.EventEmitter()

EventoEmissor.on('msg', ()=>console.log('Oi'))
EventoEmissor.on('fim', ()=>console.log('TCHAU'))

const porta = process.env.PORT || 3000
const servidor = http.createServer((req, res)=>{
    EventoEmissor.emit('msg')
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.write('Tudo certo aqui')
    EventoEmissor.emit('fim')
    res.end()
})
servidor.listen(porta, ()=>console.log('Rodando'))