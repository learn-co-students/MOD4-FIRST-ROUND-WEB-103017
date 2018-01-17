import React from 'react'



const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onChange={(event) => props.handleChange(event)}
        placeholder={"Search your Recent Transactions"}
        value={props.value}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search



// const Search = (props) => {
//   return (
//     <div className="ui huge fluid icon input">
//       <input
//         type="text"
//         onChange={() => props.handleChange(event)}
//         placeholder={"Search your Recent Transactions"}
//         value={props.value}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//   )
// }
//
// export default Search
