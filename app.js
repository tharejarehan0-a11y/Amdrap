const express = require('express');
const app = express();
const PORT = 5050;

app.use(express.static('public'))


app.get("/",(req,res)=>{
  res.sendFile('public/html/index.html',{root:__dirname});
})

app.get("/members",(req,res)=>{
  res.sendFile('public/html/members.html',{root:__dirname});
})

app.get("/whatwethink",(req,res)=>{
  res.sendFile('public/html/ideology.html',{root:__dirname});
})

app.listen(PORT,()=>{
  console.log('app started')
})