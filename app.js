const express = require('express')

const app = express()

const hello = require('./routes.js')

app.use('/router', hello)

// app.get('/',function(req,res,next){
//     res.send('Hello World')
//     next()
// })

// app.get('/example',function(req,res){
//     res.send('Hello World example')
// })

app.listen(3000)