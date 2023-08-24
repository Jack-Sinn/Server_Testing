const fs = require('fs')
const http = require('http')

let html = fs.readFileSync('./index.html');

const server =  http.createServer((req,res)=>{
    let path = req.url;
    console.log('New Request Recieved')
    res.end(path);
})

server.listen(3000,()=>{
    console.log("Server Open");
})
