const express = require('express')
const rotas = express.Router()

let cursosInfo=[
    {'curso':'Js', 'info':'curso de Javascript'},
    {'curso':'Java', 'info':'curso de Java'},
    {'curso':'Node', 'info':'curso de Node'},
    {'curso':'React', 'info':'curso de React'},
    {'curso':'React-Native', 'info':'curso de React-Native'}
]

rotas.get('/',(req,res)=>{
    res.json({ola:'bem vindo'})
})

rotas.get('/:cursoid',(req,res)=>{
    const curso=req.params.cursoid
    const cursoI = cursosInfo.find(i=>i.curso == curso)
    if(!cursoI){
        res.status(404).json(
            {erro:'Curso não encontrado', cursoPesquisado:curso}
        )
    }else{
        res.status(200).json(
            {cursoI}
        )
    }
})
module.exports = rotas;