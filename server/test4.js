const app = require("express")();
const https = require("https");
const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 443; // HTTPS 는 443 포트를 사용합니다

const option =
  process.env.NODE_ENV === "production"
    ? {
        key: fs.readFileSync(
          __dirname + "/etc/letsencrypt/live/musicdata.link/privkey.pem"
        ),
        cert: fs.readFileSync(
          __dirname + "/etc/letsencrypt/live/musicdata.link/cert.pem"
        ),
        ca: fs.readFileSync(
          __dirname + "/etc/letsencrypt/live/musicdata.link/fullchain.pem"
        ),
      }
    : undefined;

// production 모드에서는 https 서버를
// development 모드에서는 http 서버를 사용합니다
option
  ? https.createServer(option, app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    })
  : http.createServer(app).listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });

app.get("/", (req, res) => {
  // res.header({
  //   "Access-Control-Allow-Origin": "*",
  // });
  res.send("hello world");
});
