const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.end('hello world')
    console.log('req url: ', req.url)
}).listen(port, () => {
    console.log('server is running on port: ', port)
});