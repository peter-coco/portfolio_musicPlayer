import { useEffect, useCallback, useState } from "react";
import { Music } from "../../../App";
import OnOutsiceClick from "react-outclick";
import { MusicSubOperation } from "./subOperation/subOperation";
import "./musicList.css";

export function MusicInfor({
  music,
  setplayBarActivate,
  setplayBarMusicInfor,
  setMusicList,
  checkClickThumbsUp,
  setCheckClickThumbsUp,
  checkClickLibrary,
  setCheckClickLibrary,
}: {
  music: Music;
  setplayBarActivate: Function;
  setplayBarMusicInfor: Function;
  setMusicList: Function;
  checkClickThumbsUp: boolean;
  setCheckClickThumbsUp: Function;
  checkClickLibrary: boolean;
  setCheckClickLibrary: Function;
}) {
  const [operationActivate, setOperationActivate] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://musicdata.link/")
      .then((e) => e.json())
      .then((e) => setMusicList(e.res));
  }, [checkClickThumbsUp]);

  const handleClick = useCallback(() => {
    if (!music.isLike) {
      fetch(`https://musicdata.link/addLikes/${music.title}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((e) => e.json())
        .then((e) => console.log(e.res));
      setCheckClickThumbsUp((pre: boolean) => !pre);
    } else {
      fetch(`https://musicdata.link/subLikes/${music.title}`, {
        method: "DELETE",
      })
        .then((e) => e.json())
        .then((e) => console.log(e.res));
      setCheckClickThumbsUp(!checkClickThumbsUp);
    }
    // setplayBarMusicInfor(music);
  }, [music, setCheckClickThumbsUp, checkClickThumbsUp]);

  const subMenuClickToggleFunc = useCallback(
    (area: string) => {
      if (area === "inSide") setOperationActivate((pre) => !pre);
      else if (operationActivate) setOperationActivate(false);
    },
    [setOperationActivate, operationActivate]
  );

  return (
    <div className="music">
      <div className="music-info">
        <img src={music.albumCover} className="music-cover" />
        <div className="music-title">{music.title}</div>
        <div className="music-artist">{music.artist}</div>
        <div className="music-album">{music.album}</div>
        <div className="music-playTime">
          {Math.floor(music.time / 60)}:{music.time % 60}
        </div>
        <div className="music-likes">{music.likes}</div>
        <div className="music-views">{music.views}</div>
        <i
          style={{ color: music.isLike ? "white" : "black" }}
          className="fas fa-thumbs-up"
          onClick={handleClick}
        ></i>
        <i
          className="fas fa-ellipsis-v list-ellipsis"
          onClick={() => {
            subMenuClickToggleFunc("inSide");
          }}
        >
          <OnOutsiceClick
            onOutsideClick={() => {
              subMenuClickToggleFunc("outSide");
            }}
          >
            <MusicSubOperation
              music={music}
              setplayBarActivate={setplayBarActivate}
              setplayBarMusicInfor={setplayBarMusicInfor}
              setMusicList={setMusicList}
              operationActivate={operationActivate}
              checkClickLibrary={checkClickLibrary}
              setCheckClickLibrary={setCheckClickLibrary}
            />
          </OnOutsiceClick>
        </i>
      </div>
    </div>
  );
}
