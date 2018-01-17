import React from 'react'

const Search = (props) => {
  console.log("from search", props)
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.search}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
