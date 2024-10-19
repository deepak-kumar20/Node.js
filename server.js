
const fs = require('fs');
const html = fs.readFileSync('./template/index.html');
const http = require('http');
//step 1: we have to create a server
const server = http.createServer((req, response) => {
     response.end(html);
    // console.log(html);

});
// step 2 :start the server
server.listen(8000, '127.0.0.1', () => {
    console.log('server has started..');
})