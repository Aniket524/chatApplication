const express = require('express')
const app = express()
const { join } = require('node:path');

app.get('/',(req,res)=>{
    res.sendFile(join(__dirname, 'index.html'));
})

app.get('/demo',(req,res)=>{
    res.send("this is the demo page os the application")
})

app.get('/kiran',(req,res)=>{
    res.send('hii kiran sir anna sir   ')
})

app.listen(3000,()=>{
    console.log('app is running on port 3000')
})