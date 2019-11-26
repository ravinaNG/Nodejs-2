const http = require('http');

const requestListener = (request, response) => {
    response.write('Hello from different World');
    response.end();
}

const server = http.createServer(requestListener);

const confirmationCallBack = () => {
    console.log('Server is active....');
}

server.listen(9000, confirmationCallBack);