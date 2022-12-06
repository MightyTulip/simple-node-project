const https = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3000;
const urlMap = {
    '/': './index.html',
    '/about': './about.html',
    '/contact-me': './contact-me.html'
}

const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  try {
    console.log('try', req.url)
    fs.readFile(urlMap[req.url], (err, data) => {
        res.end(data)
    })
  } catch (error) {
    console.log('error')
    fs.readFile('./404.html', (err, data) => res.end(data))
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});