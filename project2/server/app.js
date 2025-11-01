const http = require('http');
const fs = require('fs');

http.createServer(function(request, response) {

    let filePath = "index.html";
    if(request.url !== '/'){
        filePath = request.url.substring(1);
    }
    fs.readFile(filePath, 'utf8', function(err, data) {
        if(err) {
            response.statusCode = 404;
            response.end("Resource not found");
        } else {
            if (filePath.endsWith("js")||(filePath.endsWith("jsx"))){
                response.setHeader("Content-Type", "text/javascript; charset=utf-8");
            }
            response.end(data);
        }
    });

}).listen(3000, function(){
    console.log("Server started on port 3000");
})