import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        value={props.searchTerm}
        placeholder={"Search your Recent Transactions"}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
