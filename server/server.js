const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    let reqPath = req.url;
    let pathName = '';
    if (reqPath === '/index.html') {
        pathName = path.join(__dirname, reqPath);
    }
    else if (reqPath === '/') {
        pathName = path.join(__dirname, reqPath, 'index.html');
    }
    fs.readFile(pathName, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        res.end(data);
    });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, 'localhost', () => {
  console.log('server on http://localhost:' + PORT);
})