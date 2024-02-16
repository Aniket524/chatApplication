const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('this is the main page of the application')
})

app.get('/demo',(req,res)=>{
    res.send("this is the demo page os the application")
})

app.get('/kiran',(req,res)=>{
    res.send('hii kiran')
})

app.listen(3000,()=>{
    console.log('app is running on port 3000')
})