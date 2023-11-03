const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }

    if(req.url==='/about'){
        res.end('welocome to the about page and this is miracle')
    }

    res.end(`
        <h1>Oops</h1>
        <p>we cant seem to find the page you are looking for</p>
        `
    )

    /*console.log(req)
    res.write("welcome to our home page and this is miracle")
    res.end()*/
})

server.listen(5000)