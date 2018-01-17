import React from "react";

const Search = props => {
  return (
    <div
      className="ui huge fluid icon input"
      onChange={props.searchHandler}
      value=""
    >
      <input type="text" placeholder={"Search your Recent Transactions"} />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;
