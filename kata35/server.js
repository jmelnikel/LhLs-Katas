const net = require('net');
const fs = require('fs');
const server = net.createServer();

server.on('connection', (client) => {
  console.log("New client has connected.");
  client.on('data', (dataIn) => {
    fs.readFile(dataIn, 'utf8', (error, dataOut) => {
      if (error) throw error;
      client.write(dataOut);
    });
  });
});

server.listen(3000, () => {
  console.log("Server is active and listening on port 3000.");
});