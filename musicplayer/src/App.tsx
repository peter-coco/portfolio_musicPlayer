import React, { useEffect, useState } from "react";
import "./App.css";
import AlbumImg from "./img/albums/coldplay_Parachutes.jpg";

import { isThisTypeNode } from "typescript";
import { NONAME } from "node:dns";

interface Music {
  title: string;
  artist: string;
  album: string;
  time: string;
  likes: number;
  views: number;
  library: string;
  genre: string;
}

enum SortType {
  TITLES,
  ARTISTS,
  ALBUMS,
  LIKES,
  VIEWS,
}
function SearchBar({ setSearchInput }: { setSearchInput: Function }) {
  const [inputText, setInputText] = useState<string>("");
  const [musicList, setMusicList] = useState<Music[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
  }, []);

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
            setSearchInput(inputText);
          }}
        ></i>
      </div>
    </div>
  );
}

function PlayerNav({
  setSearchInput,
  setSortType,
  setGenreType,
  setRankSideBarActivate,
}: {
  setSearchInput: Function;
  setSortType: Function;
  setGenreType: Function;
  setRankSideBarActivate: Function;
}) {
  const [rankSideBarToggle, setRankSideBarToggle] = useState<boolean>(true);

  return (
    <nav id="player-navBar">
      <div id="main-logo">MUSIGRAM</div>
      <div id="menu-bar">
        <i
          onClick={() => {
            setSearchInput("");
            setGenreType("");
            // setSortType(SortType.TITLES);
            if (rankSideBarToggle === false) {
              setRankSideBarToggle(!rankSideBarToggle);
              setRankSideBarActivate(rankSideBarToggle);
            }
          }}
          className="fas fa-home"
        ></i>
        <i
          className="fas fa-chart-bar"
          onClick={() => {
            setRankSideBarToggle(!rankSideBarToggle);
            setRankSideBarActivate(rankSideBarToggle);
            setGenreType("");
            setSortType(SortType.VIEWS);
          }}
        ></i>
        <i
          className="far fa-list-alt"
          onClick={() => {
            // console.log(librarySideBarActivate);
            // setLibrarySideBarToggle(!librarySideBarToggle);
            // setLibrarySideBarActivate(librarySideBarToggle);
          }}
        ></i>

        {/* <i className="fas fa-user-circle"></i> */}
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
  setGenreType,
  searchInput,
}: {
  searchInput: string;
  setGenreType: string;
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
        .filter((el) => el.genre.includes(setGenreType))
        .sort((a, b) => {
          switch (sortType) {
            case SortType.ALBUMS:
              return a.album.localeCompare(b.album);
            case SortType.ARTISTS:
              return a.artist.localeCompare(b.artist);
            case SortType.TITLES:
              return a.title.localeCompare(b.title);
            case SortType.LIKES:
              return b.likes - a.likes;
            case SortType.VIEWS:
              return b.views - a.views;
            default:
              return a.album.localeCompare(b.album);
          }
        })
        .map((e, idx) => (
          <Music key={idx} music={e} />
        ))}
    </main>
  );
}

function Music({ music }: { music: Music }) {
  const [subOperationActivate, setSubOperationActivate] = useState<boolean>(
    false
  );
  const [operationToggle, setoperationToggle] = useState<boolean>(false);

  return (
    <div className="music">
      <div className="music-info">
        <div className="music-count">1</div>
        <div className="music-cover"></div>
        <div className="music-title">{music.title}</div>
        <div className="music-artist">{music.artist}</div>
        <div className="music-album">{music.album}</div>
        <div className="music-playTime">{music.time}</div>
        <div className="music-likes">{music.likes}</div>
        <div className="music-views">{music.views}</div>
        <i className="fas fa-thumbs-up"></i>
        <i
          className="fas fa-ellipsis-v"
          onClick={() => {
            setSubOperationActivate(!operationToggle);
            setoperationToggle(!operationToggle);
          }}
        >
          <MusicSubOperation
            music={music}
            subOperationActivate={subOperationActivate}
          />
        </i>
      </div>
      {/* <div className="music-thumb"> */}
      {/* <i className="fas fa-thumbs-down"></i> */}
      {/* </div> */}
    </div>
  );
}

function MusicSubOperation({
  music,
  subOperationActivate,
}: {
  music: Music;
  subOperationActivate: boolean;
}) {
  return (
    <div
      style={subOperationActivate ? { display: "flex" } : { display: "none" }}
      className="music-sub-operation"
    >
      <div>재생</div>
      <div>재생목록에 담기</div>
      <div>재생목록에서 삭제</div>
    </div>
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
        <div className="music-views">11</div>
        <i className="fas fa-thumbs-up"></i>
      </div>
      <div className="player-operation">
        {/* <i className="fas fa-step-backward"></i> */}
        <i className="fas fa-play"></i>
        {/* <i className="fas fa-step-forward"></i> */}
        <i className="fas fa-volume-down"></i>
        {/* <i className="fas fa-ellipsis-v"></i> */}
      </div>
    </footer>
  );
}

function RankSideBar({
  setSortType,
  setGenreType,
  rankSideBarActivate,
}: {
  setSortType: Function;
  setGenreType: Function;
  rankSideBarActivate: boolean;
}) {
  return (
    <div
      style={rankSideBarActivate ? { display: "flex" } : { display: "none" }}
      className="rank-sidebar"
    >
      <div
        className="sidebar-menu"
        onClick={() => {
          setGenreType("");
          setSortType(SortType.VIEWS);
        }}
      >
        전체
      </div>
      <div
        className="sidebar-pop"
        onClick={() => {
          setGenreType("POP");
          setSortType(SortType.VIEWS);
        }}
      >
        POP
      </div>
      <div
        className="sidebar-kpop"
        onClick={() => {
          setGenreType("KPOP");
          setSortType(SortType.VIEWS);
        }}
      >
        K-POP
      </div>
      <div
        className="sidebar-rock"
        onClick={() => {
          setGenreType("ROCK");
          setSortType(SortType.VIEWS);
        }}
      >
        ROCK
      </div>
      {/* <div
        className="sidebar-views"
        onClick={() => {
          setSortType(SortType.VIEWS);
        }}
      >
        조회수별
      </div> */}
      <div
        className="sidebar-likes"
        onClick={() => {
          setSortType(SortType.LIKES);
        }}
      >
        좋아요순
      </div>
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
  const [genreType, setGenreType] = useState<string>("");

  // const [librarySideBarActivate, setLibrarySideBarActivate] = useState<boolean>(
  //   false
  // );
  const [rankSideBarActivate, setRankSideBarActivate] = useState<boolean>(
    false
  );

  return (
    <div id="musicPlayer">
      <PlayerNav
        setSearchInput={setSearchInput}
        setSortType={setSortType}
        setGenreType={setGenreType}
        setRankSideBarActivate={setRankSideBarActivate}
      />
      <div id="main-wr">
        <RankSideBar
          setSortType={setSortType}
          setGenreType={setGenreType}
          rankSideBarActivate={rankSideBarActivate}
        />
        {/* <LibrarySideBar
          setSortType={setSortType}
          librarySideBarActivate={librarySideBarActivate}
        /> */}
        <MusicList
          sortType={sortType}
          setGenreType={genreType}
          searchInput={searchInput}
        />
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
