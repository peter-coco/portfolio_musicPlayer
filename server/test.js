const express = require("express");
const fs = require("fs");
const path = require("path");
const HTTPS = require("https");

const app = express();

try {
  const option = {
    ca: fs.readFileSync("/etc/letsencrypt/live/musicdata.link/fullchain.pem"),
    key: fs
      .readFileSync(
        path.resolve(
          process.cwd(),
          "/etc/letsencrypt/live/musicdata.link/privkey.pem"
        ),
        "utf8"
      )
      .toString(),
    cert: fs
      .readFileSync(
        path.resolve(
          process.cwd(),
          "/etc/letsencrypt/live/musicdata.link/cert.pem"
        ),
        "utf8"
      )
      .toString(),
  };

  HTTPS.createServer(option, app).listen(sslport, () => {
    // colorConsole.success(
    //   `[HTTPS] Soda Server is started on port ${colors.cyan(sslport)}`
    // );
    console.log("success");
  });
} catch (error) {
  // colorConsole.error(
  //   "[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다."
  // );
  // colorConsole.warn(error);
  console.log("error");
}
