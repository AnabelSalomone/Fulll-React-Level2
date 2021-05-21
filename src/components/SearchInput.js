import React from "react";
import "../index.css";

const SearchInput = ({keyword, handleOnChange}) => {
  return (
    <div>
      <input
        type="text"
        name="searchbar"
        value={keyword}
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );
};

export default SearchInput;
