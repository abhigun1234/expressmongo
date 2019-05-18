var express =require('express')
var app=express()
var path=require('path')
app.listen(1337,function(){

    console.log('littening at port 1337')
})
app.get('/servehtml',function(req,res){


    res.sendFile('index.html',{root: path.join(__dirname,'./files')})
   
    //connectToDb()
    // console.log(data)
    // res.contentType('application/json');
    // //res.send(data)
    // res.send("hello world")
})
app.get('/hello',function(req,res)
{

    res.send("hello world")
})
function connectToDb()
{
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    var jsonObj
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("retail");
      dbo.collection("product").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.productname);
         jsonObj = {'name':result.productname};
        
        db.close();
      });
    });
    return JSON.stringify(jsonObj)
}
