import React from 'react'
import Transaction from './Transaction'

const TransactionsList = ({transactions, filter}) => {

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

        {transactions.filter(t=> t.category.toLowerCase().includes(filter)||t.description.toLowerCase().includes(filter)).map(transaction =>  <Transaction transaction={transaction}/> )}


      </tbody>
    </table>
  )
}

export default TransactionsList
