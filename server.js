var express = require('express')
var mysql = require('mysql')

var server = express()
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datahp'
})

connection.connect()

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

server.get('/barang', function(req, res){
    connection.query('SELECT * FROM barang', function (error, results) {
        if (error){
            console.log(error)
        }
        return res.status(200).json({
            message: 'berhasil ambil barang', 
            results    
        })
    })
})

server.get('/barang/:id', function (req, res) {
    var id=req.params.id
   connection.query(`SELECT * FROM barang WHERE id=${id}`, function (error, results){
       if (error){
           console.log(error)
       }
       if (results.length==0){
            return res.status(404).json({
                message:'data kosong'
            })
       }
       return res.status(200).json({
           message: 'berhasil ambil barang berdasarkan id',
           results
       })
   }) 
})

// connection.end()


server.listen(3000, function(){
    console.log('server sudah jalan')
})