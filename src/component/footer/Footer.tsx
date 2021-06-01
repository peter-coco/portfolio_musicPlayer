import { useState, useEffect, useCallback } from "react";
import { Music } from "../../App";
import "./Footer.css";

export function Footer({
  playBarActivate,
  playBarMusicInfor,
  checkClickThumbsUp,
  setplayBarMusicInfor,
}: {
  playBarActivate: boolean;
  playBarMusicInfor: Music;
  checkClickThumbsUp: boolean;
  setplayBarMusicInfor: Function;
}) {
  const [playNpauseToggle, setPlayNpauseToggle] = useState(false);
  const [musicTime, setMusicTime] = useState(0);
  const [pauseMusic, setPauseMusic] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if (playBarMusicInfor) {
      setTotalTime(playBarMusicInfor.time);
      setMusicTime(0);
    }
  }, [playBarMusicInfor]);

  useEffect(() => {
    if (playBarActivate && playBarMusicInfor && !pauseMusic) {
      const timer = setInterval(() => {
        setMusicTime((pre) => (pre < playBarMusicInfor.time ? pre + 1 : pre));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [playBarActivate, pauseMusic, playBarMusicInfor]);

  useEffect(() => {
    fetch("http://3.128.153.230:8080/")
      .then((e) => e.json())
      .then((e) => {
        // //
        for (let i = 0; i < e.res.length; i++) {
          if (e.res[i].title === playBarMusicInfor.title) {
            setplayBarMusicInfor(e.res[i]);
          }
        }
      });
  }, [checkClickThumbsUp]);

  const playNPauseToggleFunc = useCallback(() => {
    setPauseMusic((pre) => !pre);
    setPlayNpauseToggle((pre) => !pre);
  }, [setPauseMusic, setPlayNpauseToggle]);

  // const cs: CSSProperties = {
  //   display: playBarActivate ? "flex" : "none",
  // };

  // // let cs : CSSProperties;
  // // if (playBarActivate)
  // //   cs = { display: "flex" };
  // // else
  // //   cs = { display: "none" }

  return (
    <footer
      style={{
        display: playBarActivate ? "flex" : "none",
      }}
      id="player-footer"
    >
      <div id="song-progress-bar">
        <div
          style={{
            width: `${(musicTime / totalTime) * 100}%`,
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
            style={{ display: playNpauseToggle ? "block" : "none" }}
            className="fas fa-play"
            onClick={playNPauseToggleFunc}
          ></i>
          <i
            style={{ display: playNpauseToggle ? "none" : "block" }}
            className="fas fa-pause"
            onClick={playNPauseToggleFunc}
          ></i>
          <i className="fas fa-volume-down"></i>
        </div>
      </div>
    </footer>
  );
}
