import React from 'react'

// const Search = () => {
export default class Search extends React.Component {
  handleInput = (e) => {
    let term = e.target.value
    this.props.callBackFromParent(term)
  }

  render(){
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onChange={this.handleInput}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )}
}

// export default Search
