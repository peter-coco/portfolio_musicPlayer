const express = require("express");
const app = express();

// app.use(express.static("public"));

let data = {
  res: [
    {
      title: "yellow",
      artist: "coldplay",
      album: "Parachutes",
      time: "4:27",
      likes: 128,
      views: 5,
      library: "",
      // url:
      //   "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjFfMjc1%2FMDAxNjE2MjU2MTYyNTU0.89_q0o0vE_OOnjXJpKDVv6x372sM_MxP3vg20jSMG3sg.rOlPkl7mEiJ3sKfp13pUIqfAMwB-hchowGtYqm3pp80g.PNG.tjsal2772%2F%25B3%25B2%25C7%25D8_%25BF%25A9%25C7%25E04.png&type=sc960_832",
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      time: "2:54",
      likes: 62,
      views: 128,
      library: "",
    },
    {
      title: "Best Part",
      artist: "대니얼 시저",
      album: "Freudian",
      time: "3:30",
      likes: 13,
      views: 52,
      library: "",
    },
    {
      title: "Bad",
      artist: "크리스토퍼",
      album: "Under the Surface",
      time: "3:12",
      likes: 78,
      views: 111,
      library: "",
    },
  ],
};

app.get("/setLib", (req, res) => {
  const { lib, title } = req.query;

  data.res = data.res.map((e) => {
    if (e.title === title) {
      return { ...e, library: lib };
    }
    return e;
  });

  res.json({
    res: "OK",
  });
});

app.get("/", (req, res) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
  });
  res.json(data);
});

app.listen(8080, () => {
  console.log("start!");
});
