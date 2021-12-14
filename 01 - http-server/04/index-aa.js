const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let requestCount = 0;

const server = http.createServer((request, response) => {
  const currentRequestCount = requestCount++;
  console.log(`This is the start of request #${currentRequestCount}`);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  setTimeout(() => {
    console.log(`This is the end of request #${currentRequestCount}`);
    response.end('Hello World\n');
  }, Math.random() * 1000);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
