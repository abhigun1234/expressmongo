var express =require('express')
var app=express()
console.log(__dirname)
app.listen(1337,function(){

    console.log('littening at port 1337')
})

app.get('/hello',function(req,res)
{

    res.send("hello world")
})
console.log(__dirname)
app.use('/cssFiles',express.static(__dirname+'/assets'));