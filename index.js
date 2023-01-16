const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(`
        <h2>send email</h2>
        <form method="post" action="/">
            <input type="text" name="email" placeholder="enter your email address"/>
            <button type="submit">Send email</button>
        </form>
    `)
    } else {
        res.end('Email sent successfully')
    }
});

server.listen(3000, () => {
    console.log('listening on');
});