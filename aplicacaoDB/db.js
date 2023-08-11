const conect = async ()=>{
    if(global.conexao && global.conexao.state != 'desconected'){
        return global.conexao
    }
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:ar04212000@localhost:3306/aulasql")
    console.log("Conectou")
    global.conexao = con
    return con;
}

const tdUsers = async()=>{
    const con = await conect()
    const [linhas] = await con.query('SELECT*FROM user')
    return await linhas
}

const insereUser = async(user)=>{
    const con = await conect()
    const sql = 'INSERT INTO user (nome, nasc) VALUES (?, ?)'
    const valores = [user.nome, user.nasc]
    await con.query(sql, valores)
}

const atualizaUser = async(user)=>{
    const con = await conect()
    const sql = 'UPDATE user SET nome=?, nasc=? WHERE iduser=?'
    const valores = [user.nome, user.nasc, user.idus]
    await con.query(sql, valores)
}

const exclueUser = async(id)=>{
    const con = await conect()
    const sql = 'DELETE FROM user WHERE iduser=?'
    await con.query(sql, id)
}
module.exports = {tdUsers, insereUser, atualizaUser, exclueUser}