import { useState, useCallback } from "react";
import "./SearchBar.css";

export function SearchBar({ setSearchInput }: { setSearchInput: Function }) {
  const [inputText, setInputText] = useState("");

  const clickSearchFunc = useCallback(
    () => setSearchInput(inputText),
    [setSearchInput, inputText]
  );

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
        <i className="fas fa-search" onClick={clickSearchFunc}></i>
      </div>
    </div>
  );
}
