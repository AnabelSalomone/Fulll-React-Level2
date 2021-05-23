import React from "react";
import "../index.css";

const Error = ({ codeStatus }) => {
  let message = "";

  switch (codeStatus) {
    // If query limit is attained
    case 403:
      message =
        "Data is not available because query limit was attained, please try again in a few moments";
      break;
    // If there are no results
    case 200:
      message = "No results";
      break;
    // When landing to the page
    case 204:
      message = "Please, start typing...";
      break;

    // Other possible errors
    default:
      message = "An error occurred";
  }

  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

export default Error;
