const express=require('express')
const app=express()

let callback1=function(req,res,next){
    console.log('Hello World'+Date.now())
    next()
}

let callback2=function(req,res,next){
    res.send('Hello World')
    next()
}

app.get('/middleware',[callback1,callback2])

app.listen(3000)