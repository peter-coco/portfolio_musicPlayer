import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import AlbumImg from "./img/albums/coldplay_Parachutes.jpg";

import { isThisTypeNode } from "typescript";

interface Music {
  title: string;
  artist: string;
  album: string;
  time: string;
  likes: number;
}

// interface Res{
//   input:string;
//   sortType:SortType;
// }

function SearchBar({ setSearchInput }: { setSearchInput: Function }) {
  const [inputText, setInputText] = useState<string>("");
  const [isThereMusic, setIsThereMusic] = useState<boolean>(false);
  const [musicList, setMusicList] = useState<Music[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
  }, []);

  useEffect(() => {
    if (isThereMusic) {
    } else {
    }
  }, [isThereMusic]);

  return (
    <div id="serach-bar">
      <div id="search-input-wrapper">
        <input
          type="text"
          id="search-input"
          onChange={(event) => setInputText(event.target.value)}
        />
      </div>
      <div id="search-icon">
        <i
          className="fas fa-search"
          onClick={() => {
            // if (!inputText) {
            //   alert("please input music title");
            //   return;
            // }

            let found = musicList.some((el) => el.title === inputText);

            // for (let i = 0; i < musicList.length; i++) {
            //   console.log(musicList[i].title, inputText);
            //   if (musicList[i].title === inputText) {
            //     found = true;
            //     break;
            //   } else found = false;
            // }
            setSearchInput(inputText);

            // if (found) alert("Find Music");
            // else alert("There is no what you search");
          }}
        ></i>
      </div>
    </div>
  );
}

function PlayerNav({ setSearchInput }: { setSearchInput: Function }) {
  return (
    <nav id="player-navBar">
      <div id="main-logo">MUSIGRAM</div>
      <div id="menu-bar">
        <i
          onClick={() => {
            setSearchInput("");
            // setSortType(...);
          }}
          className="fas fa-home"
        ></i>
        <i className="fas fa-chart-bar"></i>
        <i className="far fa-list-alt"></i>
        <i className="fas fa-user-circle"></i>
      </div>
      <SearchBar setSearchInput={setSearchInput} />
    </nav>
  );
}

// 앱 실행
// 플레이 리스트는 초기에 비어있음
// 서버에 플레이 리스트 요청
// 서버의 리스트를 가져와서 플레이 리스트에 적용
// 플레이 리스트가 변경되었음으로 element가 보임

function MusicList({
  sortType,
  searchInput,
}: {
  searchInput: string;
  sortType: SortType;
}) {
  const [musicList, setMusicList] = useState<Music[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8080/setLib?title=~~&lib=~~~")

    fetch("http://localhost:8080/")
      .then((e) => e.json())
      // .then((e) => (list = e.res))
      .then((e) => setMusicList(e.res));
    // .then((e) => console.log(list));
  }, []);

  return (
    <main id="player-main">
      {musicList
        .filter((el) => el.title.includes(searchInput))
        .sort((a, b) => {
          switch (sortType) {
            case SortType.ALBUMS:
              return a.album.localeCompare(b.album);
            case SortType.LIKES:
              return a.likes - b.likes;
          }
          return a.album.localeCompare(b.album);
        })
        .map((e, idx) => (
          <Music key={idx} music={e} />
        ))}
    </main>
  );
}

function Music({ music }: { music: Music }) {
  return (
    <div className="music">
      <div className="music-count">1</div>
      <div className="music-info">
        <div className="music-cover"></div>
        <div className="music-title">{music.title}</div>
        <div className="music-artist">{music.artist}</div>
        <div className="music-album">{music.album}</div>
        <div className="music-playTime">{music.time}</div>
        <div className="music-likes">{music.likes}</div>
      </div>
      <div className="music-thumb">
        <i className="fas fa-thumbs-up"></i>
        <i className="fas fa-thumbs-down"></i>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer id="player-footer">
      <div className="playingNow">
        <img
          className="music-album-img"
          src={
            "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjFfMjc1%2FMDAxNjE2MjU2MTYyNTU0.89_q0o0vE_OOnjXJpKDVv6x372sM_MxP3vg20jSMG3sg.rOlPkl7mEiJ3sKfp13pUIqfAMwB-hchowGtYqm3pp80g.PNG.tjsal2772%2F%25B3%25B2%25C7%25D8_%25BF%25A9%25C7%25E04.png&type=sc960_832"
          }
        ></img>
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

enum SortType {
  ALBUMS,
  LIKES,
  VIEW,
}

function Side({ setSortType }: { setSortType: Function }) {
  return (
    <div className="sidebar">
      <div className="sidebar-views">조회수별</div>
      <div
        className="sidebar-likes"
        onClick={() => {
          setSortType(SortType.LIKES);
        }}
      >
        좋아요별
      </div>
      <div className="sidebar-menu">등록일수</div>
    </div>
  );
}

function MusicPlayer() {
  // const [res, setRes] = useState<Res>({
  //   input:"",
  //   sortType:SortType.ALBUMS
  // });
  const [searchInput, setSearchInput] = useState("");

  const [sortType, setSortType] = useState<SortType>(SortType.LIKES);

  return (
    <div id="musicPlayer">
      <PlayerNav setSearchInput={setSearchInput} />
      <div id="main-wr">
        <Side setSortType={setSortType} />
        <MusicList sortType={sortType} searchInput={searchInput} />
      </div>
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
