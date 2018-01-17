import React from "react";

const Search = props => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onChange={event => props.handleChange(event)}
        placeholder={props.typed}
      />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;
