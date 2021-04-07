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
      genre: "ROCK",
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      time: "2:54",
      likes: 62,
      views: 128,
      library: "",
      genre: "ROCK",
    },
    {
      title: "Best Part",
      artist: "대니얼 시저",
      album: "Freudian",
      time: "3:30",
      likes: 13,
      views: 52,
      library: "",
      genre: "POP",
    },
    {
      title: "Bad",
      artist: "크리스토퍼",
      album: "Under the Surface",
      time: "3:12",
      likes: 78,
      views: 111,
      library: "",
      genre: "POP",
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
