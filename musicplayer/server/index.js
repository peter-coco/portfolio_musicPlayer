const e = require("express");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("public"));
app.use(express.json());

app.use(cors());

// add & delete music likes
app.delete("/subLikes/:title", (req, res) => {
  const { title } = req.params;

  // data.res = data.res.map((e) =>
  //   e.title === title ? { ...e, isLike: false } : e
  // );

  for (let dataBase of data.res) {
    if (dataBase.title === title) {
      dataBase.isLike = false;
      dataBase.likes -= 1;
    }
  }

  res.json({
    res: "sub Like !!",
  });
});

app.post("/addLikes/:title", (req, res) => {
  const { title } = req.params;

  console.log(req.params);
  res.header({
    "Access-Control-Allow-Origin": "*",
  });

  // data.res = data.res.map((e) =>
  //   e.title === title ? { ...e, isLike: true } : e
  // );

  for (let dataBase of data.res) {
    if (dataBase.title === title) {
      dataBase.isLike = true;
      dataBase.likes += 1;
    }
  }

  res.json({
    res: "add Like !!",
  });
});

// add & delete music list in library
app.delete("/delLib/:title", (req, res) => {
  const { title } = req.params;

  data.res = data.res.map((e) =>
    e.title === title ? { ...e, library: "" } : e
  );

  res.json({
    res: "Deleted !!",
  });
});

app.post("/addLib/:title", (req, res) => {
  const { title } = req.params;
  const { lib } = req.body;

  console.log(req.params);
  console.log(lib);
  res.header({
    "Access-Control-Allow-Origin": "*",
  });

  data.res = data.res.map((e) =>
    e.title === title ? { ...e, library: lib } : e
  );

  res.json({
    res: "selected !!",
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

let data = {
  res: [
    {
      title: "yellow",
      artist: "coldplay",
      album: "Parachutes",
      albumCover:
        "http://drive.google.com/uc?export=view&id=1UQO8qJEhyuag7CAIKzXpULTOwLLG43_u",
      time: "60",
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
      time: "60",
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
      time: "60",
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
      time: "60",
      likes: 78,
      views: 111,
      library: "",
      genre: "POP",
      isLike: false,
    },
  ],
};
