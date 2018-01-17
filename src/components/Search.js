import React from 'react'

const Search = ({handleChange, searchTerm}) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        value={searchTerm}
        placeholder={"Search your Recent Transactions"}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
