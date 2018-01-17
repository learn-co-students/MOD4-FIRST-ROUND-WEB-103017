import React from 'react'

class Search extends React.Component {
  constructor(){
    super()
  }

  handleQuery = (event) => {
    this.props.handleQuery(event.target.value)
  }

  render(){
    return (
      <div className="ui huge fluid icon input">

        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleQuery}
        />

        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search
