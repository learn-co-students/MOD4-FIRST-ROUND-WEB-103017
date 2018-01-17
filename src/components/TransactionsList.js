import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const transaction = props.transactions.map((tr,index) => <Transaction tr={tr} key={index}/>)

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Transaction
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

        {transaction}
      </tbody>
    </table>
  )
}

export default TransactionsList
