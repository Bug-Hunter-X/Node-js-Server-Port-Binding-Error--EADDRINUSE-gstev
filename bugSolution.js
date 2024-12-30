const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;
const maxRetries = 5;
let retries = 0;

function listenServer(){
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

function retryListening(){
    if(retries < maxRetries){
        retries++;
        setTimeout(listenServer, 1000);
    } else {
        console.error(`Failed to start server after ${maxRetries} retries. Port ${port} is in use.`);
    }
}

// Handle the error event
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Retrying...`);
    retryListening();
  } else {
    console.error(`An error occurred: ${err.message}`);
  }
});

listenServer();