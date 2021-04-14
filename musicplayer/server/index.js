const e = require("express");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use(cors());

app.post("/", (req, res) => {
  console.log("request is finished");
  console.log(req.body);
  console.log(req.body.name);
  const data = req.body;

  res.json({
    // status: "success",
    name: data.name,
    age: data.age,
    // a: data.a,
  });
});

// /addlib/aa
// /addlib/bb

app.delete("/delLib/:title", (req, res) => {
  const { title } = req.params;

  data.res = data.res.map((e) =>
    e.title === title ? { ...e, library: "" } : e
  );

  res.json({
    res: "OK",
  });
});

app.post("/addLib/:title", (req, res) => {
  const { title } = req.params;
  const { lib } = req.body;

  data.res = data.res.map((e) =>
    e.title === title ? { ...e, library: lib } : e
  );

  res.json({
    res: "OK",
  });
});

// app.get("/setLib", (req, res) => {
//   const { lib, title } = req.query;

//   data.res = data.res.map((e) => {
//     if (e.title === title) {
//       return { ...e, library: lib };
//     }
//     return e;
//   });

//   res.json({
//     res: "OK",
//   });
// });

app.get("/", (req, res) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
  });
  res.json(data);
});

app.listen(8080, () => {
  console.log("start!");
});

let data = {
  res: [
    {
      title: "yellow",
      artist: "coldplay",
      album: "Parachutes",
      time: "4:27",
      likes: 128,
      views: 5,
      library: "A",
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
