import React, { useEffect, useState } from "react";
import "./App.css";
// import AlbumImg from "./img/albums/coldplay_Parachutes.jpg";

import { isThisTypeNode } from "typescript";
import { NONAME } from "node:dns";

interface Music {
  title: string;
  artist: string;
  album: string;
  albumCover: string;
  time: number;
  likes: number;
  views: number;
  library: string;
  genre: string;
  isLike: boolean;
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
  setLibraryType,
  setGenreType,
  setRankSideBarActivate,
}: {
  setSearchInput: Function;
  setSortType: Function;
  setLibraryType: Function;
  setGenreType: Function;
  setRankSideBarActivate: Function;
}) {
  const [rankSideBarToggle, setRankSideBarToggle] = useState<boolean>(true);
  const [homeBarToggle, setHomeBarToggle] = useState<boolean>(true);
  const [libraryBarToggle, setLibraryBarToggle] = useState<boolean>(false);

  return (
    <nav id="player-navBar">
      <div id="main-logo">MUSIGRAM</div>
      <div id="menu-bar">
        <i
          style={homeBarToggle ? { color: "white" } : { color: "black" }}
          onClick={() => {
            setSearchInput("");
            setGenreType("");
            setLibraryType("");
            setSortType(SortType.LIKES);

            if (rankSideBarToggle === false) {
              setRankSideBarToggle((pre) => !pre);
              setRankSideBarActivate(rankSideBarToggle);
            }

            if (!homeBarToggle) setHomeBarToggle((pre) => !pre);
            if (libraryBarToggle) setLibraryBarToggle((pre) => !pre);
          }}
          className="fas fa-home"
        ></i>
        <i
          style={rankSideBarToggle ? { color: "black" } : { color: "white" }}
          className="fas fa-chart-bar"
          onClick={() => {
            if (rankSideBarToggle) {
              setRankSideBarActivate(rankSideBarToggle);
              setRankSideBarToggle((pre) => !pre);
            }

            if (homeBarToggle) setHomeBarToggle((pre) => !pre);
            if (libraryBarToggle) setLibraryBarToggle((pre) => !pre);
            setGenreType("");
            setLibraryType("");
            setSearchInput("");
            setSortType(SortType.VIEWS);
          }}
        ></i>
        <i
          style={libraryBarToggle ? { color: "white" } : { color: "black" }}
          className="far fa-list-alt"
          onClick={() => {
            // console.log(librarySideBarActivate);
            // setLibrarySideBarToggle(!librarySideBarToggle);
            // setLibrarySideBarActivate(librarySideBarToggle);

            setLibraryType("selected");
            setGenreType("");
            if (rankSideBarToggle === false) {
              setRankSideBarToggle((pre) => !pre);
              setRankSideBarActivate(rankSideBarToggle);
            }
            if (homeBarToggle) setHomeBarToggle((pre) => !pre);
            if (!libraryBarToggle) setLibraryBarToggle((pre) => !pre);
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
  libraryType,
  musicList,
  setplayBarActivate,
  setplayBarMusicInfor,
  setMusicList,
}: {
  searchInput: string;
  setGenreType: string;
  sortType: SortType;
  libraryType: string;
  musicList: Music[];
  setplayBarActivate: Function;
  setplayBarMusicInfor: Function;
  setMusicList: Function;
}) {
  // const [musicList, setMusicList] = useState<Music[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
  }, []);

  return (
    <main id="player-main">
      {musicList
        .filter((el) => el.title.includes(searchInput))
        .filter((el) => el.genre.includes(setGenreType))
        .filter((el) => el.library.includes(libraryType))
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
          <Music
            key={e.title + e.album + e.artist}
            music={e}
            setplayBarActivate={setplayBarActivate}
            setplayBarMusicInfor={setplayBarMusicInfor}
            setMusicList={setMusicList}
          />
        ))}
    </main>
  );
}

function Music({
  music,
  setplayBarActivate,
  setplayBarMusicInfor,
  setMusicList,
}: {
  music: Music;
  setplayBarActivate: Function;
  setplayBarMusicInfor: Function;
  setMusicList: Function;
}) {
  const [subOperationActivate, setSubOperationActivate] = useState<boolean>(
    false
  );
  const [operationToggle, setoperationToggle] = useState<boolean>(false);
  const [checkClickThumbsUp, setCheckClickThumbsUp] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
  }, [checkClickThumbsUp]);

  return (
    <div className="music">
      <div className="music-info">
        {/* <div className="music-count">1</div> */}
        {/* <div
          style={{ background: `url(${music.albumCover}) center/cover` }}
          className="music-cover"
        ></div> */}
        <img src={music.albumCover} className="music-cover" />
        <div className="music-title">{music.title}</div>
        <div className="music-artist">{music.artist}</div>
        <div className="music-album">{music.album}</div>
        <div className="music-playTime">
          {parseInt(String(music.time / 60))}:{music.time % 60}
        </div>
        <div className="music-likes">{music.likes}</div>
        <div className="music-views">{music.views}</div>
        <i
          style={music.isLike ? { color: "white" } : { color: "black" }}
          className="fas fa-thumbs-up"
          onClick={() => {
            if (music.isLike === false) {
              fetch(`http://localhost:8080/addLikes/${music.title}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((e) => e.json())
                .then((e) => console.log(e.res));
              setCheckClickThumbsUp(!checkClickThumbsUp);
            } else {
              fetch(`http://localhost:8080/subLikes/${music.title}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((e) => e.json())
                .then((e) => console.log(e.res));
              setCheckClickThumbsUp(!checkClickThumbsUp);
            }
            // setplayBarMusicInfor(music);
          }}
        ></i>
        <i
          className="fas fa-ellipsis-v list-ellipsis"
          onClick={() => {
            setSubOperationActivate(!operationToggle);
            // pre(가제)는 직전값을 의미(보장)
            setoperationToggle((pre) => !pre);

            // false
            // true
            // true
          }}
        >
          <MusicSubOperation
            music={music}
            subOperationActivate={subOperationActivate}
            setplayBarActivate={setplayBarActivate}
            setplayBarMusicInfor={setplayBarMusicInfor}
            setMusicList={setMusicList}
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
  setplayBarActivate,
  setplayBarMusicInfor,
  setMusicList,
}: {
  music: Music;
  subOperationActivate: boolean;
  setplayBarActivate: Function;
  setplayBarMusicInfor: Function;
  setMusicList: Function;
}) {
  const [playBarToggle, setPlayBarToggle] = useState<boolean>(false);
  const [checkClickLibrary, setCheckClickLibrary] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
  }, [checkClickLibrary]);

  return (
    <div
      // onClick={(e) => {
      //   e.stopPropagation();
      // }}
      style={subOperationActivate ? { display: "flex" } : { display: "none" }}
      className="music-sub-operation"
    >
      <div
        // style={{ background: "red" }}
        className="sub-operation-menus"
        onClick={() => {
          if (!playBarToggle) {
            setplayBarActivate(!playBarToggle);
            setPlayBarToggle(!playBarToggle);
          }
          setplayBarMusicInfor(music);
        }}
      >
        재생
      </div>
      <div
        className="sub-operation-menus"
        onClick={() => {
          fetch(`http://localhost:8080/addLib/${music.title}`, {
            method: "POST",
            // mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lib: "selected",
            }),
          })
            .then((response) => response.json())
            .then((response) => console.log(response));
          setCheckClickLibrary(!checkClickLibrary);
        }}
      >
        즐겨찾기에 담기
      </div>
      <div
        className="sub-operation-menus"
        onClick={() => {
          fetch(`http://localhost:8080/delLib/${music.title}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((response) => console.log(response));
          setCheckClickLibrary(!checkClickLibrary);
        }}
      >
        즐겨찾기에서 삭제
      </div>
    </div>
  );
}

function Footer({
  playBarActivate,
  playBarMusicInfor,
}: {
  playBarActivate: boolean;
  playBarMusicInfor: Music;
}) {
  const [playNpauseToggle, setPlayNpauseToggle] = useState<boolean>(false);
  const [musicTime, setMusicTime] = useState<number>(playBarMusicInfor.time);
  let totalTime = playBarMusicInfor.time;
  if (playBarActivate) {
    let timer = setInterval(() => {
      // console.log(totalTime);
      if (totalTime == 0) {
        clearInterval(timer);
      }
      --totalTime;
      setMusicTime(totalTime);
      // console.log(musicTime);
    }, 1000);
  }

  return (
    <footer
      style={playBarActivate ? { display: "flex" } : { display: "none" }}
      id="player-footer"
    >
      <div id="song-progress-bar">
        <div
          style={{
            width: `${
              ((playBarMusicInfor.time - musicTime) * 100) /
              playBarMusicInfor.time
            }%`,
          }}
          id="progress"
        ></div>
      </div>
      <div id="playingNow-wrap">
        <div className="playingNow">
          <img src={playBarMusicInfor.albumCover} className="music-cover" />
          <div className="music-title">{playBarMusicInfor.title}</div>
          <div className="music-artist">{playBarMusicInfor.artist}</div>
          <div className="music-album">{playBarMusicInfor.album}</div>
          <div className="music-playTime">
            {parseInt(String(playBarMusicInfor.time / 60))}:
            {playBarMusicInfor.time % 60}
          </div>
          <div className="music-likes">{playBarMusicInfor.likes}</div>
          <div className="music-views">{playBarMusicInfor.views}</div>
        </div>
        <div className="player-operation">
          {/* <i className="fas fa-step-backward"></i> */}
          <i
            style={
              playNpauseToggle ? { display: "block" } : { display: "none" }
            }
            className="fas fa-play"
            onClick={() => {
              setPlayNpauseToggle(!playNpauseToggle);
            }}
          ></i>
          <i
            style={
              !playNpauseToggle ? { display: "block" } : { display: "none" }
            }
            className="fas fa-pause"
            onClick={() => {
              setPlayNpauseToggle(!playNpauseToggle);
            }}
          ></i>
          {/* <i className="fas fa-step-forward"></i> */}
          <i className="fas fa-volume-down"></i>

          {/* <i className="fas fa-ellipsis-v playingNow-ellipsis"></i> */}
        </div>
      </div>
    </footer>
  );
}

function RankSideBar({
  setSearchInput,
  setSortType,
  setGenreType,
  rankSideBarActivate,
}: {
  setSearchInput: Function;
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
          setSearchInput("");
          setGenreType("");
          setSortType(SortType.VIEWS);
        }}
      >
        전체
      </div>
      <div
        className="sidebar-pop"
        onClick={() => {
          setSearchInput("");
          setGenreType("POP");
          setSortType(SortType.VIEWS);
        }}
      >
        POP
      </div>
      <div
        className="sidebar-kpop"
        onClick={() => {
          setSearchInput("");
          setGenreType("KPOP");
          setSortType(SortType.VIEWS);
        }}
      >
        K-POP
      </div>
      <div
        className="sidebar-rock"
        onClick={() => {
          setSearchInput("");
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
          setSearchInput("");
          setGenreType("");
          setSortType(SortType.LIKES);
        }}
      >
        좋아요순
      </div>
    </div>
  );
}

function MusicPlayer({
  playBarMusicInfor,
  setplayBarMusicInfor,
}: {
  playBarMusicInfor: Music;
  setplayBarMusicInfor: Function;
}) {
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState<SortType>(SortType.LIKES);
  const [genreType, setGenreType] = useState<string>("");
  const [libraryType, setLibraryType] = useState<string>("");
  const [musicList, setMusicList] = useState<Music[]>([]);

  const [rankSideBarActivate, setRankSideBarActivate] = useState<boolean>(
    false
  );

  const [playBarActivate, setplayBarActivate] = useState<boolean>(false);

  return (
    <div id="musicPlayer">
      <PlayerNav
        setSearchInput={setSearchInput}
        setSortType={setSortType}
        setLibraryType={setLibraryType}
        setGenreType={setGenreType}
        setRankSideBarActivate={setRankSideBarActivate}
      />
      <div id="main-wr">
        <RankSideBar
          setSearchInput={setSearchInput}
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
          libraryType={libraryType}
          musicList={musicList}
          setplayBarActivate={setplayBarActivate}
          setplayBarMusicInfor={setplayBarMusicInfor}
          setMusicList={setMusicList}
        />
      </div>
      <Footer
        playBarActivate={playBarActivate}
        playBarMusicInfor={playBarMusicInfor}
      />
    </div>
  );
}

function App() {
  const [playBarMusicInfor, setplayBarMusicInfor] = useState<Music>({
    title: "",
    artist: "",
    album: "",
    albumCover:
      "http://drive.google.com/uc?export=view&id=1lHhCXG7SWw3aA7aJsInieWGaR9dFPO5W",
    time: 0,
    likes: 0,
    views: 0,
    library: "",
    genre: "",
    isLike: false,
  });

  return (
    <div id="background-wrap">
      <div
        style={{ backgroundImage: `url(${playBarMusicInfor.albumCover})` }}
        id="background"
      ></div>
      <MusicPlayer
        playBarMusicInfor={playBarMusicInfor}
        setplayBarMusicInfor={setplayBarMusicInfor}
      />
    </div>
  );
}

export default App;
