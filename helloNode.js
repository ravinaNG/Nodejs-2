// Load HTTP module
const http = require("http");
// const hostName = 'Ravina';
const port = 3000;

// Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type 
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');
}).listen(8080);
console.log('server is running on the port 8080 !!!');

// listen for request on port 3000, and as a callback have the port listened on logged
// server.listen(port, hostName, () => {
//     console.log(`Server running at http://${hostName}:${port}/`);
// });