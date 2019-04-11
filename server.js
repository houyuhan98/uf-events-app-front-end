const http = require('http');
var fs = require('fs');
const port = 8000;

http.createServer(function(request, response) {
    if(/(.*?).css$/.test(request.url.toString())){
      console.log(request.url.toString());
       sendFileContent(response, request.url.toString().substring(1), "text/css");
    }else if(/(.*?).js$/.test(request.url.toString())){
      console.log(request.url.toString());
      sendFileContent(response, request.url.toString().substring(1), "text/javascript");
    }else if(/(.*?).html$/.test(request.url.toString())){
      console.log(request.url.toString());
      sendFileContent(response, request.url.toString().substring(1), "text/html");
     }else if(/(.*?).png$/.test(request.url.toString())){
      console.log(request.url.toString());
        sendFileContent(response, request.url.toString().substring(1), "image/png");
    }else if(/(.*?).jpg$/.test(request.url.toString())){
      console.log(request.url.toString());
        sendFileContent(response, request.url.toString().substring(1), "image/jpg");
    }else if(request.url.toString().substring(1) == ''){
      console.log(request.url.toString());
      sendFileContent(response, "newhome.html", "text/html");
    }
  }).listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});

function sendFileContent(response, fileName, contentType){
    fs.readFile(fileName, function(err, data){
      if(err){
        response.writeHead(404);
      }
      else{
        response.writeHead(200, {'Content-Type': contentType});
        response.write(data);
      }
      response.end();
    });
  }