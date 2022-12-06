const https = require('http')
const fs = require('fs')
require('dotenv').config()

const urlMap = {
    '/': './index.html',
    '/about': './about.html',
    '/contact-me': './contact-me.html'
}

const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  try {
    fs.readFile(urlMap[req.url], (err, data) => res.end(data))
  } catch (error) {
    fs.readFile('./404.html', (err, data) => res.end(data))
  }
})

server.listen()

// Use this to test on local
// server.listen(process.env.port, process.env.hostname, () => {
//     console.log(`Server running at http://${process.env.hostname}:${process.env.port}/`);
// })