const express = require('express')
const path = require('path')

const app = express()
const host = '127.0.0.1'
const port = 3000

app.get('/node_modules/bootstrap/dist/css/bootstrap.min.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'bootstrap','dist','css','bootstrap.min.css'))
})

app.get('/node_modules/jquery/dist/jquery.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'))
})

app.get('/node_modules/moment/dist/moment.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'node_modules', 'moment', 'dist', 'moment.js'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.listen(port, () => {
  console.log(`Server running at ${host}:${port}/`)
})