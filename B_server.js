const net = require('net');

const server = net.createServer((socket) => {
    console.log('Connection from A server established.');

    socket.on('data', (chunk) => {
        try {
            const receivedData = chunk.toString();
            console.log('receivedData :: ', receivedData);
            
            const jsonData = JSON.parse(receivedData);
            console.log('Data successfully converted to JSON:', jsonData);
        } catch (error) {
            console.error('Failed to parse data as JSON:', error);
        }
    });

    socket.on('end', () => {
        console.log('End received data from A server.');
    });
});

server.listen(9000, () => {
    console.log('B server listening on port 9000.');
});
