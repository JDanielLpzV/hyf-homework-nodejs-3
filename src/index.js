const express = require('express');
const app = express();

const port = 3000;
let users =[];


app.get('/',(req,res)=>{
    res.send("Hello World!");
});
app.get('/users',(req,res)=>{
    res.send(users);
});
app.get('/user/:id',(req,res)=>{
    res.json(users[Number(req.params.id)]);
});

app.post('/user',(req,res)=>{
    let id=0;
    if(id!==null){
        users.push({id:id});
        res.json(users[id]);
    }else{
        res.end('User not added');
    }
});


app.get('/users',(req,res)=>{
    res.send(users);
})


app.listen(port,()=>console.log('server is running'));