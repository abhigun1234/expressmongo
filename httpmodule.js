var http=require('http');
http.createServer(function(request,response){
response.writeHead(200,{"Content-Type":"application/json"})
response.write(JSON.stringify({"name":"abhishek"}))

response.end()
}).listen(9999) 