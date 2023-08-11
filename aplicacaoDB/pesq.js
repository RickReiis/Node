(async ()=>{
    const db = require('./db')
    const nom = 'Bruno'
    const nas = '2008/07/22'
    const id = 5
    //inserindo usuário
    //console.log("Inserir novo usuario")
    //await db.insereUser({nome:'Aurora',nasc:'1999/06/25'})
    //atualizando usuário
    //console.log("CLiente "+id+" atualizado")
    //await db.atualizaUser({nome:nom, nasc:nas, idus:id})
    //excluindo usuário
    //console.log("CLiente "+id+" deletado")
    //await db.exclueUser(id)
    console.log("Buscar todos users")
    const users = await db.tdUsers()
    console.log(users)
})()