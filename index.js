const http=require('http')

const server=http.createServer((req,res)=>{
     if(req.url==='/')
     {
        res.setHeader('Content-Type','text/plain')
        res.write('hello')
        res.end()
     }
     else{
    res.setHeader(404,{'Content-Type':'text/plain'})
    res.write('404 not found')
    res.end();
     }

})
server.listen(3000,()=>{
    console.log('server is running on port 3000')
})
