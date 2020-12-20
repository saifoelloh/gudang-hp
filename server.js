var express = require('express')
var server = express()


server.get('/user', function(req, res){
    return res.status(200).json({
        message:'Hello User'
    })
})

server.get('/admin', function(req, res){
    return res.status(200).json({
        message:'Hello admin baru'
    })
})


server.listen(3000, function(){
    console.log('server sudah jalan')
})