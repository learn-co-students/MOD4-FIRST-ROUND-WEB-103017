import React from 'react'

const Search = (props) => {
  console.log("in search", props);
  return (
    <div className="ui huge fluid icon input" >
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onKeyUp={props.handleChange}
        value={props.filter}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
