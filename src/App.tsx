import { useState } from "react";
import "./App.css";

import { Footer } from "./component/footer/Footer";
import { RankSideBar } from "./component/sidebar/SideBar";
import { PlayerNav } from "./component/navbar/navBar";
import { Main } from "./component/main/main";

export interface Music {
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

export enum SortType {
  TITLES,
  ARTISTS,
  ALBUMS,
  LIKES,
  VIEWS,
}

// 앱 실행
// 플레이 리스트는 초기에 비어있음
// 서버에 플레이 리스트 요청
// 서버의 리스트를 가져와서 플레이 리스트에 적용
// 플레이 리스트가 변경되었음으로 element가 보임

function MusicPlayer({
  playBarMusicInfor,
  setplayBarMusicInfor,
}: {
  playBarMusicInfor: Music;
  setplayBarMusicInfor: Function;
}) {
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState<SortType>(SortType.LIKES);
  const [genreType, setGenreType] = useState("");
  const [libraryType, setLibraryType] = useState("");
  const [musicList, setMusicList] = useState<Music[]>([]);
  const [rankSideBarActivate, setRankSideBarActivate] = useState(false);
  const [playBarActivate, setplayBarActivate] = useState(false);
  const [checkClickThumbsUp, setCheckClickThumbsUp] = useState(false);

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

        <Main
          sortType={sortType}
          setGenreType={genreType}
          searchInput={searchInput}
          libraryType={libraryType}
          musicList={musicList}
          setplayBarActivate={setplayBarActivate}
          setplayBarMusicInfor={setplayBarMusicInfor}
          setMusicList={setMusicList}
          checkClickThumbsUp={checkClickThumbsUp}
          setCheckClickThumbsUp={setCheckClickThumbsUp}
        />
      </div>
      <Footer
        playBarActivate={playBarActivate}
        playBarMusicInfor={playBarMusicInfor}
        setplayBarMusicInfor={setplayBarMusicInfor}
        checkClickThumbsUp={checkClickThumbsUp}
      />
    </div>
  );
}

function App() {
  const [playBarMusicInfor, setplayBarMusicInfor] = useState<Music>({
    title: "",
    artist: "",
    album: "",
    albumCover: "https://musicdata.link/images/Bad.png",
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
