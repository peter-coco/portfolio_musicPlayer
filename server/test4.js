const app = require("express")();
const https = require("https");
const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 443; // HTTPS 는 443 포트를 사용합니다

// const option =
//   process.env.NODE_ENV === "production"
//     ? {
//         key: fs.readFileSync(
//           __dirname + "/etc/letsencrypt/live/musicdata.link/privkey.pem"
//         ),
//         cert: fs.readFileSync(
//           __dirname + "/etc/letsencrypt/live/musicdata.link/cert.pem"
//         ),
//         ca: fs.readFileSync(
//           __dirname + "/etc/letsencrypt/live/musicdata.link/fullchain.pem"
//         ),
//       }
//     : undefined;

// // production 모드에서는 https 서버를
// // development 모드에서는 http 서버를 사용합니다
// option
//   ? https.createServer(option, app).listen(PORT, () => {
//       console.log(`Server is running at port ${PORT}`);
//     })
//   : http.createServer(app).listen(PORT, () => {
//       console.log(`Server is running at port ${PORT}`);
//     });

const option = http.createServer(app).listen(80, () => {
  // console.log(`Server is running at port ${80}`);
  console.log("server is running");
});

app.get("/address", (req, res) => {
  // res.header({
  //   "Access-Control-Allow-Origin": "*",
  // });
  res.json(data);
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
