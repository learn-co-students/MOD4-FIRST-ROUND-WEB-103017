import React from 'react'


export default class TransactionsList extends React.Component {



searchMatcher = (type) => {
  let newArr = []


  //was going to filter with search term here but didnt have time

  
  this.props.results.map(result => {
    result.category.indexOf(this.props.results.term) > -1
  })

}


render(){


  const dates = (this.props.results && this.props.term)
    ? this.props.results.map(result => <dl>{result.posted_at}</dl>)
    : <dl></dl>

  const description = (this.props.results && this.props.term)
    ? this.props.results.map(result => <dl>{result.description}</dl>)
    : <dl></dl>

  const category = (this.props.results && this.props.term)
      ? this.props.results.map(result => <dl>{result.category}</dl>)
      : <dl></dl>

  const amount = (this.props.results && this.props.term)
      ? this.props.results.map(result => <dl>{result.amount}</dl>)
      : <dl></dl>

return (
  <table className="ui celled striped padded table">
    <tbody>
      <tr>
        <th>
          <h3 className="ui center aligned header">
            Posted At
          </h3>
          <ul>{dates}</ul>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Description
          </h3>
          <ul>{description}</ul>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Category
          </h3>
          <ul>{category}</ul>
        </th>
        <th>
          <h3 className="ui center aligned header">
            Amount
          </h3>
          <ul>{amount}</ul>
        </th>
      </tr>
    </tbody>
  </table>
)}
}

// export default TransactionsList
