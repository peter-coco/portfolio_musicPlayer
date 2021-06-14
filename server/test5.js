var http = require("http");
var url = require("url");

var server = http.createServer(function (request, response) {
  // 1. 실제 요청한 주소전체를 콘솔에 출력
  console.log(request.url);
  var parsedUrl = url.parse(request.url);
  // 2. parsing 된 url 중에 서버URI에 해당하는 pathname 만 따로 저장
  var resource = parsedUrl.pathname;
  console.log("resource path=%s", resource);

  // 3. 리소스에 해당하는 문자열이 아래와 같으면 해당 메시지를 클라이언트에 전달
  if (resource == "/address") {
    response.end("hello world222");
  } else if (resource == "/phone") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("02-3545-1237");
  } else if (resource == "/name") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hong Gil Dong");
  } else if (resource == "/test") {
    // response.writeHead(200, { "Content-Type": "text/html" });
    response.json(data);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("404 Page Not Found");
  }
});

// 4. 서버 포트 80번으로 변경.
server.listen(80, function () {
  console.log("Server is running...");
});

let data = {
  res: [
    {
      title: "yellow",
      artist: "coldplay",
      album: "Parachutes",
      albumCover:
        "http://drive.google.com/uc?export=view&id=1UQO8qJEhyuag7CAIKzXpULTOwLLG43_u",
      time: 135,
      likes: 128,
      views: 5,
      library: "",
      genre: "ROCK",
      isLike: false,
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      albumCover:
        "http://drive.google.com/uc?export=view&id=1VcuD3-T-FhckIzCCk1rOVNR5gpigxInI",
      time: 134,
      likes: 62,
      views: 128,
      library: "",
      genre: "ROCK",
      isLike: false,
    },
    {
      title: "Best Part",
      artist: "대니얼 시저",
      album: "Freudian",
      albumCover:
        "http://drive.google.com/uc?export=view&id=1sMGNNKPTNPb0NLXeV4cNx0c3mcRHHHr0",
      time: 137,
      likes: 13,
      views: 52,
      library: "",
      genre: "POP",
      isLike: false,
    },
    {
      title: "Bad",
      artist: "크리스토퍼",
      album: "Under the Surface",
      albumCover:
        "http://drive.google.com/uc?export=view&id=1xHaVrv0EcJjjz55XMPHMUPhbEJEAz2TB",
      time: 148,
      likes: 78,
      views: 111,
      library: "",
      genre: "POP",
      isLike: false,
    },
  ],
};
