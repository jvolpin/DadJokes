import React from "react";
import "./SearchResults.css";

const SearchResults = props => {
  return (
    <ul className="jokes-list">
      {props.afterReceivingResults.map(item => (
        <li key={item.id}>{item.joke}</li>
      ))}
    </ul>
  );
};

export default SearchResults;
