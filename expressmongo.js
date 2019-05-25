var express =require('express')
var app=express()
console.log(__dirname)
// app.listen(1337,function(){

//     console.log('littening at port 1337')
// })

var db
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, client) => {
  if (err) return console.log(err)
  db = client.db('retail') // whatever your database name is
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})
app.get('/hello', (req, res) => {
   //alert('hello')
   
   db.collection('custumer').find().toArray(function(err, results) {
    console.log(results[0])
    // send HTML file populated with quotes here
    //res.send(results[0].productname)
 
  })
    
  })
