import { useState, useCallback } from "react";
import { SearchBar } from "./searchbar/SearchBar";
import { SortType } from "../../App";
import "./navBar.css";

export function PlayerNav({
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
  const [homeBarToggle, setHomeBarToggle] = useState(true);
  const [rankSideBarToggle, setRankSideBarToggle] = useState(false);
  const [libraryBarToggle, setLibraryBarToggle] = useState(false);

  const selectHomeMenuFunc = useCallback(() => {
    setSearchInput("");
    setGenreType("");
    setLibraryType("");
    setSortType(SortType.LIKES);

    if (rankSideBarToggle) {
      setRankSideBarToggle((pre) => !pre);
      setRankSideBarActivate(!rankSideBarToggle);
    }

    if (!homeBarToggle) setHomeBarToggle((pre) => !pre);
    if (libraryBarToggle) setLibraryBarToggle((pre) => !pre);
  }, [
    setSearchInput,
    setGenreType,
    setLibraryType,
    setSortType,
    setRankSideBarActivate,
    rankSideBarToggle,
    setRankSideBarToggle,
    setHomeBarToggle,
    homeBarToggle,
    setLibraryBarToggle,
    libraryBarToggle,
  ]);

  const selectChartMenuFunc = useCallback(() => {
    setGenreType("");
    setLibraryType("");
    setSearchInput("");
    setSortType(SortType.VIEWS);

    if (!rankSideBarToggle) {
      setRankSideBarToggle((pre) => !pre);
      setRankSideBarActivate(!rankSideBarToggle);
    }
    if (homeBarToggle) setHomeBarToggle((pre) => !pre);
    if (libraryBarToggle) setLibraryBarToggle((pre) => !pre);
  }, [
    setSearchInput,
    setGenreType,
    setLibraryType,
    setSortType,
    setRankSideBarActivate,
    rankSideBarToggle,
    setRankSideBarToggle,
    setHomeBarToggle,
    homeBarToggle,
    setLibraryBarToggle,
    libraryBarToggle,
  ]);

  const selectLibraryMenuFunc = useCallback(() => {
    setLibraryType("selected");
    setGenreType("");

    if (rankSideBarToggle) {
      setRankSideBarToggle((pre) => !pre);
      setRankSideBarActivate(!rankSideBarToggle);
    }
    if (homeBarToggle) setHomeBarToggle((pre) => !pre);
    if (!libraryBarToggle) setLibraryBarToggle((pre) => !pre);
  }, [
    setGenreType,
    setLibraryType,
    setRankSideBarActivate,
    rankSideBarToggle,
    setRankSideBarToggle,
    setHomeBarToggle,
    homeBarToggle,
    setLibraryBarToggle,
    libraryBarToggle,
  ]);

  // const a = (b)=>{
  //   switch(b){}
  // }

  console.log(rankSideBarToggle);
  return (
    <nav id="player-navBar">
      <div id="logo">MUSIGRAM</div>
      <div id="menu-bar">
        <i
          style={{ color: homeBarToggle ? "white" : "black" }}
          onClick={selectHomeMenuFunc}
          className="fas fa-home"
        ></i>
        <i
          style={rankSideBarToggle ? { color: "white" } : { color: "black" }}
          className="fas fa-chart-bar"
          onClick={selectChartMenuFunc}
        ></i>
        <i
          style={libraryBarToggle ? { color: "white" } : { color: "black" }}
          className="far fa-list-alt"
          onClick={selectLibraryMenuFunc}
        />
      </div>
      <SearchBar setSearchInput={setSearchInput} />
    </nav>
  );
}
