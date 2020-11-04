// File Server
// Via command line arguments, the client can request from the server a certain file and the server will fetch it and send it back. The client will then save the file. This only works with txt files and does not implement a search function on the server. The requested file needs to be in the same diretory as the server.

const net = require('net');
const fs = require('fs');
const connection = net.createConnection({
  host: 'localhost',
  port: 3000
});
const args = process.argv.slice(2);
const fileToGet = args[0];
const destination = args[1];

connection.on('connect', () => {
  console.log("Established a connection with server.");
  connection.write(fileToGet);
});

connection.on('data', (data) => {
  fs.writeFile(destination, data, error => {
    if (error) throw error
    console.log("The file was saved!");
  });
});

