const fs = require('fs')
const http = require('http')

let html = fs.readFileSync('./index.html');

const server =  http.createServer((req,res)=>{
    console.log('New Request Recieved')
    res.end(html);
})

server.listen(8000,()=>{
    console.log("Server Open");
})
