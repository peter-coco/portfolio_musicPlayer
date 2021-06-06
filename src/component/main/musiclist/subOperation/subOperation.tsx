import { useEffect, useState, useCallback } from "react";
import { Music } from "../../../../App";
import "./subOperation.css";

export function MusicSubOperation({
  music,

  setplayBarActivate,
  setplayBarMusicInfor,
  setMusicList,
  operationActivate,
}: {
  music: Music;

  setplayBarActivate: Function;
  setplayBarMusicInfor: Function;
  setMusicList: Function;
  operationActivate: boolean;
}) {
  const [playBarToggle, setPlayBarToggle] = useState<boolean>(false);
  const [checkClickLibrary, setCheckClickLibrary] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://musicdata.link/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
  }, [checkClickLibrary]);

  const playBarToggleFunc = useCallback(() => {
    if (!playBarToggle) {
      setplayBarActivate(!playBarToggle);
      setPlayBarToggle(!playBarToggle);
    }
    setplayBarMusicInfor(music);
  }, [
    setplayBarActivate,
    setPlayBarToggle,
    setplayBarMusicInfor,
    playBarToggle,
    music,
  ]);

  const addLibraryFunc = useCallback(() => {
    fetch(`https://musicdata.link/addLib/${music.title}`, {
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
  }, [setCheckClickLibrary, checkClickLibrary, music]);

  const deleteLibraryFunc = useCallback(() => {
    fetch(`https://musicdata.link/delLib/${music.title}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
    setCheckClickLibrary(!checkClickLibrary);
  }, [setCheckClickLibrary, checkClickLibrary, music]);

  return (
    <div
      style={{
        visibility: operationActivate ? "visible" : "hidden",
        clipPath: operationActivate
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : "polygon(0 0, 100% 0, 0 0, 0 0)",
        height: "100px",
        overflow: "hidden",
        transition: "all 300ms",
      }}
      className="music-sub-operation"
    >
      <div className="sub-operation-menus" onClick={playBarToggleFunc}>
        재생
      </div>
      <div className="sub-operation-menus" onClick={addLibraryFunc}>
        즐겨찾기에 담기
      </div>
      <div className="sub-operation-menus" onClick={deleteLibraryFunc}>
        즐겨찾기에서 삭제
      </div>
    </div>
  );
}
