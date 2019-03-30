import React from "react";
import "./SearchResults.css";

const SearchResults = props => {
  return props.afterReceivingResults.length > 0 ? (
    <ul className="jokes-list">
      {props.afterReceivingResults.map(item => (
        <li key={item.id}>{item.joke}</li>
      ))}
    </ul>
  ) : (
    "no results found!"
  );
};

export default SearchResults;
