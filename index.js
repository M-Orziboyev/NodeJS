const http = require('http');

const server = http.createServer((req, res) => {
    //request method = Serverga so'rov 
    //response method = Serverdan javob
    console.log(req.url);
    res.write('hello world');
    res.end()
});

server.listen(3000, ()=>{
    console.log('listening on');
});