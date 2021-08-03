const fs = require('fs');
const http = require('http');

const port = 8000;

const index = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
const about = fs.readFileSync(`${__dirname}/about.html`, 'utf-8');
const contactMe = fs.readFileSync(`${__dirname}/contact-me.html`, 'utf-8');
const fnf = fs.readFileSync(`${__dirname}/404.html`, 'utf-8');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/' || pathName === '/index') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(index);
    } else if (pathName === '/about') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(about);
    } else if (pathName === '/contact-me') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(contactMe);
    } else {
        res.writeHead(404);
        res.end(fnf);
    }
});

server.listen(port, '127.0.0.1', () => {
    console.log(`The server is listening on port ${port}`);
});