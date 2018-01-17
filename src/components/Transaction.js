import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.tr.posted_at}</td>
      <td>{props.tr.description}</td>
      <td>{props.tr.category}</td>
      <td>{props.tr.amount}</td>
    </tr>
  )
}

export default Transaction
