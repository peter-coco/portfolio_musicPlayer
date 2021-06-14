import { useCallback } from "react";
import { SortType } from "../../App";
import "./SideBar.css";

export function RankSideBar({
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
  const selectSidebarMenu = useCallback(
    (input: string, genre: string, sort: SortType) => {
      setSearchInput(input);
      setGenreType(genre);
      setSortType(sort);
    },
    [setSearchInput, setGenreType, setSortType]
  );

  return (
    <div
      style={{ display: rankSideBarActivate ? "flex" : "none" }}
      className="rank-sidebar"
    >
      <div
        className="sidebar-menu"
        onClick={() => selectSidebarMenu("", "", SortType.VIEWS)}
      >
        전체
      </div>
      <div
        className="sidebar-pop"
        onClick={() => selectSidebarMenu("", "POP", SortType.VIEWS)}
      >
        POP
      </div>
      <div
        className="sidebar-kpop"
        onClick={() => selectSidebarMenu("", "KPOP", SortType.VIEWS)}
      >
        K-POP
      </div>
      <div
        className="sidebar-rock"
        onClick={() => selectSidebarMenu("", "ROCK", SortType.VIEWS)}
      >
        ROCK
      </div>
      <div
        className="sidebar-likes"
        onClick={() => selectSidebarMenu("", "", SortType.LIKES)}
      >
        좋아요순
      </div>
    </div>
  );
}
