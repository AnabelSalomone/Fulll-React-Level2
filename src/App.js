import React, { useState, useEffect } from "react";
import SearchResults from "./components/SearchResults";
import Error from "./components/Error";
import SearchInput from "./components/SearchInput";
import "./index.css";

function App() {
  const [searchResult, setSearchResult] = useState([]); // established via the APIData function and sent to the SerachResults component
  const [keyword, setKeyword] = useState(""); // initializes the keyword
  const [codeStatus, setCodeStatus] = useState(204); // initializes code status

  const APIData = async (keyword) => {
    const url = `https://api.github.com/search/users?q=${keyword}`;

    const data = await fetch(url); // fetches the data
    setCodeStatus(data.status); // sets code status
    const json = await data.json(); //stores data
    setSearchResult(json.items); //sets the 'items' array to the serchResults var
  };

  const handleSearchbar = (keyword) => {
    APIData(keyword);
  };

  const handleOnChange = (e) => {
    setKeyword(e.target.value); // updates the keyword var
  };

  useEffect(() => {
    if (keyword.length > 0) { // avoids useEffect to be triggered on the first mount
      handleSearchbar(keyword); // calls the API everytime 'keyword' changes
    }
  }, [keyword]);

  return (
    <div className="container">
      <div className="searchbar">
        <SearchInput keyword={keyword} handleOnChange={handleOnChange} />
      </div>
      <div>
        {searchResult && searchResult.length > 1 && codeStatus === 200 ? (
          <SearchResults results={searchResult} />
        ) : (
          <Error codeStatus={codeStatus} />
        )}
      </div>
    </div>
  );
}

export default App;
