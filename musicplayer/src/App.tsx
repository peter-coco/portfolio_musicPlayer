import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import musicCover from "./img/albums/coldplay_Parachutes.jpg";

function SearchBar() {
  return (
    <div id="serach-bar">
      <div id="search-input-wrapper">
        <input type="text" id="search-input" />
      </div>
      <div id="search-icon">
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

function PlayerNav() {
  return (
    <nav id="player-navBar">
      <div id="main-logo">MUSIGRAM</div>
      <div id="menu-bar">
        <i className="fas fa-home"></i>
        <i className="fas fa-chart-bar"></i>
        <i className="far fa-list-alt"></i>
        <i className="fas fa-user-circle"></i>
      </div>
      <SearchBar />
    </nav>
  );
}

function Music(props: { artist: string; album: string }) {
  return (
    <div className="music">
      <div className="music-count">1</div>
      <div className="music-info">
        <div className="music-cover"></div>
        <div className="music-title">yellow</div>
        <div className="music-artist">{props.artist}</div>
        <div className="music-album">Parachtes</div>
        <div className="music-playTime">4:27</div>
        <div className="music-likes">128</div>
      </div>
      <div className="music-thumb">
        <i className="fas fa-thumbs-up"></i>
        <i className="fas fa-thumbs-down"></i>
      </div>
    </div>
  );
}

// 앱 실행
// 플레이 리스트는 초기에 비어있음
// 서버에 플레이 리스트 요청
// 서버의 리스트를 가져와서 플레이 리스트에 적용
// 플레이 리스트가 변경되었음으로 element가 보임

function MusicList() {
  const [musicList, setMusicList] = useState<
    {
      name: string;
      album: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
    // .then((e) => console.log(e.res));
  }, []);

  return (
    <main id="player-main">
      {musicList.map((e, idx) => (
        <Music key={idx} artist={e.name} album="hello" />
      ))}
    </main>
  );
}

function Footer() {
  return (
    <footer id="player-footer">
      <div className="playingNow">
        <div className="music-album-img"></div>
        <div className="music-title">yellow</div>
        <div className="music-artist">coldplay</div>
        <div className="music-album">Parachtes</div>
        <div className="music-playTime">4:27</div>
        <div className="music-likes">128</div>
        <i className="fas fa-thumbs-up"></i>
        <i className="fas fa-thumbs-down"></i>
      </div>
      <div className="player-operation">
        <i className="fas fa-step-backward"></i>
        <i className="fas fa-play"></i>
        <i className="fas fa-step-forward"></i>
        <i className="fas fa-volume-down"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </footer>
  );
}

function MusicPlayer() {
  return (
    <div id="musicPlayer">
      <PlayerNav />
      <MusicList />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div id="background">
      <MusicPlayer />
    </div>
  );
}

export default App;
