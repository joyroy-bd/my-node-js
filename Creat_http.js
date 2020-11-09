const http=require('http');

http.createServer((req,res)=>{
    res.end('Hello! I am your sever.');
}).listen(3000,()=>{
    const hostName='127.0.0.1';
    console.log('Your Server is running at'+hostName);
});