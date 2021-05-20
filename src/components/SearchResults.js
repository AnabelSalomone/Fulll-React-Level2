import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.map((result) => {
        return <p>{result.login}</p>;
      })}
    </div>
  );
};

export default SearchResults;
