const express=require('express');
const paht=require('path');

const app=express();

app.use(express.static('public'));

app.use((req,res,next)=>{
    res.sendFile(paht.resolve(__dirname,'..','..','public','index.html'));

});

const port=process.env.PORT||8080;

app.listen(port,()=>{
    console.log("server başladı:"+port);
})