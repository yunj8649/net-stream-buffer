const http = require('http');

// A 서버의 주소와 포트를 지정
const options = {
    hostname: 'localhost',
    port: 8000,
    path: '/',
    method: 'GET'
};

// A 서버에 HTTP 요청을 보내는 클라이언트
const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => { console.log(`BODY: ${chunk}`); });
    res.on('end', () => { console.log('No more data in response.'); });
});

req.on('error', (e) => { console.error(`problem with request: ${e.message}`) });

// 요청 종료
req.end();
