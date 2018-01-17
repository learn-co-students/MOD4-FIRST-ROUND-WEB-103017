import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.transactionData.posted_at}</td>
      <td>{props.transactionData.description}</td>
      <td>{props.transactionData.category}</td>
      <td>{props.transactionData.amount}</td>
    </tr>
  )
}

export default Transaction
