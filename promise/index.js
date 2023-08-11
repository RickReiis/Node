/*
const fs = require('fs')
const barata = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err)
        } else{
            resolve(contents)
        }
    })
})
const init = async() => {
    try{
        const contents = await barata('./arquivo.txt')
        return String(contents)
    }catch(err){
        console.log(err)
    }
}

init()
    .then(contents =>console.log(contents))
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
*/

async function tarefa1(par) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Tarefa '+par);
        }, 1000)
    })
}
async function tarefa2(par) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Tarefa '+par);
        }, 1000)
    })
}
async function tarefa3(par) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve('Tarefa '+par);
        }, 1000)
    })
}
async function principal(){
    /*
    tarefa1(1).then(Response => console.log(Response));
    tarefa2(2).then(Response => console.log(Response));
    tarefa3(3).then(Response => console.log(Response));
    */
    const respo1 = await tarefa1(1);
    console.clear();
    console.log(respo1);
    const respo2 = await tarefa1(2);
    console.clear();
    console.log(respo2);
    const respo3 = await tarefa1(3);
    console.clear();
    console.log(respo3);
    
}
principal();
