// Load HTTP module
const http = require("http");
const hostName = '127.0.0.1';
const port = 3000;

// Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type 
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');
});

// listen for request on port 3000, and as a callback have the port listened on logged
server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});