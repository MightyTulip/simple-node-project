const express = require('express')
const path = require('path')
// Only for local environment
// require('dotenv').config()

const urlMap = {
    '/': '/index.html',
    '/about': '/about.html',
    '/contact-me': '/contact-me.html'
}

const app = express().get('*', (req, res) => {
  const map = urlMap[req.path] || '404.html'
  res.sendFile(path.join(__dirname, map));
})

app.listen()

// Use this to test on local
// app.listen(process.env.port, process.env.hostname, () => {
//     console.log(`Server running at http://${process.env.hostname}:${process.env.port}/`);
// })