const https = require("https");

const hostname = "musicdata.link"; // 서버 컴퓨터의 ip
const port = 8080; //

const server = https.createServer((req, res) => {
  // createServer 명령을 통해 서버 한대를 만든다.
  res.statusCode = 200; // 통신 성공
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  // 만든 서버가 이 컴퓨터에 리스닝을 하도록 시킨다.
  // 첫번째 인자 port는 3000번이고 hostname은 이 컴퓨터의 ip 같은 것
  console.log(`Server running at http://${hostname}:${port}/`);
});
