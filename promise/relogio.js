async function segundos(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1);
        },1000)
    })
}

async function chamada(){
    let rel = "00:00:00";
    for (var b = 1; b <=24; b++) {
        for(var a = 1; a<=60;a++){
            for (var i = 1; i<=60;i++){
                const segundo = await segundos();
                console.clear()
                if(i<10){
                    rel = rel.substring(0, rel.length-2)+"0"+i
                }
                else{
                    rel = rel.substring(0, rel.length-2)+i
                }
                console.log(rel)
            }
            if(a<10){
                rel = rel.substring(0, rel.length-5)+"0"+a+":00"
            }
            else{
                rel = rel.substring(0, rel.length-5)+a+":00"
            }
            console.clear()
            console.log(rel)
        }
        if(b<10){
            rel = "0"+b+":00:00"
        }
        else{
            rel = b+":00:00"
        }
        console.clear()
        console.log(rel)
    }
    
}

chamada();