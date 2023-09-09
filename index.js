const express=require('express')
const port=8000;
const app=express();
const data=require('./,models/Data.json');

app.get('/users',(req,res)=>{
    res.send({data});
})

app.listen(port,function(err){
    if(err){
        console.log('Error is running on server');
    }
    console.log(`server is running on port: ${port}`);
})

//server is running on port: 8000