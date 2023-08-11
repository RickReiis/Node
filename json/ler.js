
const fetch = require('fetch').fetchUrl
console.clear()

fetch("https://a7b2-170-79-230-129.sa.ngrok.io", function(error, meta, body){
    var obj = JSON.parse(body)
    console.log(obj[0])
})
