var express = require('express')
var server = express()
var expbs = require('express-handlebars')

server.engine('hbs', expbs())
server.set('view engine', 'hbs')

server.get('/dashboard', function (req, res) {
    res.render('layouts/main')
})

server.get('/user', function (req, res) {
    return res.status(200).json({
        message: 'Hello User'
    })
})

server.get('/admin', function (req, res) {
    return res.status(200).json({
        message: 'Hello admin baru'
    })
})


server.listen(3000, function () {
    console.log('server sudah jalan')
})