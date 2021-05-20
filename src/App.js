import React, { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState([]); // established via the APIData function and sent to the SerachResults component
  const [keyword, setKeyword] = useState(""); // initializes the keyword
  let input = React.createRef();

  const APIData = async (keyword) => {
    const url = "https://api.github.com/search/users?q=";
    const api = url + keyword;

    const data = await fetch(api);
    const json = await data.clone().json();

    setSearchResult(json.items);
  };

  const handleSearchbar = (keyword) => {
    APIData(keyword);
  };

  const handleOnChange = () => {
    setKeyword(input.current.value);
  };

  useEffect(() => {
    handleSearchbar(keyword);
  }, [keyword])

  return (
    <div className="container">
      <input type="text" name="searchbar" ref={input} onChange={handleOnChange} />
      {searchResult ? <SearchResults results={searchResult}/> : null}
    </div>
  );
}

export default App;
