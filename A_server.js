const net = require('net');
const { Readable } = require('stream');

net.createServer((socket) => {
    socket.connect(9000, 'localhost', () => {
        console.log('Connected to B server');

         // 대용량 더미 데이터 생성
        const largeData = [];
        for (let i = 0; i < 100000; i++) {
            largeData.push({ id: i,name: `Name-${i}`,description: `Description-${i}` });
        }
        const jsonString = JSON.stringify(largeData);

        // 스트림으로 데이터 전송
        const readStream = new Readable({
            read() {
                this.push(jsonString);
                this.push(null); // 스트림 끝을 알림
            }
        });

        readStream.pipe(socket);

        socket.on('end', () => {
            console.log('Finished sending data to B server');
            res.end('Data has been sent to B server');
        });
    });
}).listen(8000, () => {
    console.log('A server listening on port 8000');
});
