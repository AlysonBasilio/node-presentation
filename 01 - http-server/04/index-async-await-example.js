const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
let requestCount = 0;

const setTimeoutPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve()
  }, Math.random() * 1000);
})

const server = http.createServer(async (request, response) => {
  const currentRequestCount = requestCount++;
  console.log(`This is the start of request #${currentRequestCount}`);
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  await setTimeoutPromise();
  console.log(`This is the end of request #${currentRequestCount}`);
  response.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
