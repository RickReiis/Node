const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    if(req.url=='/'){
        res.write('<h1>Ola</h1>');
    }else if(req.url=='/perfil'){
        res.write('<h1>feio</h1>');
    }else if(req.url=='/pag3'){
        res.write('<h1>Ola, essa é a página 3</h1>');
    }
    res.end();
});
servidor.listen(porta, host, ()=>{console.log('Servidor rodando')})