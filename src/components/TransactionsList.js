import React from 'react'
import Transaction from './Transaction';
const TransactionsList = (props) => {

  console.log("transaction list", props.transactions)
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
        <tr>
        {props.transactions.map((transaction, i) => <Transaction key={i} transaction={transaction}/>)}
        </tr>
      </tbody>
    </table>
  )
}

export default TransactionsList
