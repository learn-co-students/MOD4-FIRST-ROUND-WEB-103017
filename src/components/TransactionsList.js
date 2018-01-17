import React from 'react'
import Transaction from './Transaction'

class TransactionsList extends React.Component {

  handleResults = () => {
  if(this.props.results.length > 0){
    return this.props.results.map((transaction) => {
      return <Transaction transactionData={transaction}/>
    })
  }

  }

  render(){
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>
        {this.handleResults()}

      </tbody>
    </table>
  )
}
}

export default TransactionsList
