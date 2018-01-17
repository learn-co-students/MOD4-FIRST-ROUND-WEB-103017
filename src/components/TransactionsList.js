import React from 'react'
import Transaction from './Transaction'
const TransactionsList = (props) => {

  const allTransactionCards = props.transactions.map((trans) => { return <Transaction item={trans} /> })
  console.log(allTransactionCards)
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
        {allTransactionCards}

      </tbody>
    </table>
  )
}

export default TransactionsList
