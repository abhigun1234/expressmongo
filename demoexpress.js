var express =require('express')
var app=express()
app.listen(1337,function(){

    console.log('littening at port 1337')
})

app.get('/hello',function(req,res)
{

    res.send("hello world")
})
app.post('senddata',function(req,res)
{
 req.
})