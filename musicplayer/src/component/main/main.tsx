import { useEffect } from "react";
import { Music, SortType } from "../../App";
import { MusicInfor } from "./musiclist/musicList";
import "./main.css";

export function Main({
  sortType,
  setGenreType,
  searchInput,
  libraryType,
  musicList,
  setplayBarActivate,
  setplayBarMusicInfor,
  setMusicList,
  checkClickThumbsUp,
  setCheckClickThumbsUp,
}: {
  searchInput: string;
  setGenreType: string;
  sortType: SortType;
  libraryType: string;
  musicList: Music[];
  setplayBarActivate: Function;
  setplayBarMusicInfor: Function;
  setMusicList: Function;
  checkClickThumbsUp: boolean;
  setCheckClickThumbsUp: Function;
}) {
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
          <MusicInfor
            key={e.title + e.album + e.artist}
            music={e}
            setplayBarActivate={setplayBarActivate}
            setplayBarMusicInfor={setplayBarMusicInfor}
            setMusicList={setMusicList}
            checkClickThumbsUp={checkClickThumbsUp}
            setCheckClickThumbsUp={setCheckClickThumbsUp}
          />
        ))}
    </main>
  );
}
