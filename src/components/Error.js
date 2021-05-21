import React from "react";
import "../index.css";

const Error = ({ codeStatus }) => {
  if(codeStatus === 403){
      return (
        <div>
          <h3>Data is not available because query limit was attained, please try again in a few moments</h3>
        </div>
      );
  }

  return <h3>No results.</h3>
};

export default Error;
