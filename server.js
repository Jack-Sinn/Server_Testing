const fs = require('fs')
const http = require('http')

let htmlob = {
    index:fs.readFileSync('./index.html'),
    home:fs.readFileSync('./home.html'),
    contact:fs.readFileSync('./contact.html'),
    about:fs.readFileSync('./about.html')
}
let html = fs.readFileSync('./basic.html','utf-8');
const server =  http.createServer((req,res)=>{
    let path = req.url;
    console.log('New Request Recieved '+path);

    if(path === '/' || path.toLocaleLowerCase()=== '/index'){res.end(html.replace('{{%Content%}}','Index'))   
    }else if(path.toLocaleLowerCase() === '/home'){res.end(html.replace('{{%Content%}}','Home'))
    }else if(path.toLocaleLowerCase() === '/about'){res.end(html.replace('{{%Content%}}','About'))
    }else if(path.toLocaleLowerCase() === '/contact'){res.end(html.replace('{{%Content%}}','Contact'))
    }else{res.writeHead(404,{'content-type':'text/html'}).end();}
})

server.listen(3500,()=>{
    console.log("Server Open");
})
