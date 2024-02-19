const net = require('net');
let dataBuffer = Buffer.alloc(0); // 수신된 데이터를 저장할 버퍼

const server = net.createServer((socket) => {
    console.log('Connection from A server established.');

    socket.on('data', (chunk) => {
        // A 서버로부터 수신된 데이터 조각(chunk)을 dataBuffer에 추가
        dataBuffer = Buffer.concat([dataBuffer, chunk]);
    });

    socket.on('end', () => {
        console.log('All data received from A server.');
        // 모든 데이터 수신 완료 후 처리
        try {
            // 받은 데이터를 문자열로 변환
            const receivedData = dataBuffer.toString();
            // 문자열을 JSON 객체로 변환 (예시에서는 받은 데이터가 JSON 형태라고 가정)
            const jsonData = JSON.parse(receivedData);
            console.log('Data successfully converted to JSON:', jsonData);
            // 필요한 추가 처리 수행
        } catch (error) {
            throw new Error('Failed to parse data as JSON:', error);
        }
    });
});

server.listen(9000, () => {
    console.log('B server listening on port 9000.');
});
