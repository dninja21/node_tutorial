const http=require('http')
const { emit } = require('process')
const server=http.createServer((req,res)=>{
    if(req.url === '/') // if home page 
    {   
        res.end('welcome to home page')
    }
    if(req.url === '/about')
    {
        res.end('Here is our short history')
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for</p> 
        <a href='/'> back home</a>`)
   
})
server.on('request',(req,res)=>{res.end(welcome)})
server.listen(5000)
