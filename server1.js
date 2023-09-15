const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-Type' : 'application/json'})

    fs.readFile('index.html', (error, data) => {
        if(error)
        {
            res.writeHead(404);
            res.write('Error:File Not Found');
        }
        else
        {
            res.write(data);
        }
        res.end();
    })
})

server.listen(port, (error) => {
    if(error){
        console.log('somthing went wrong ', error);
    }
    else{
        console.log("Server is listening to the port " + port);
    }
});