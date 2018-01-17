import React from 'react'

const Transaction = ({t}) => {
  return (
    <tr>
      <td>{t.posted_at}</td>
      <td>{t.description}</td>
      <td>{t.category}</td>
      <td>{t.amount}</td>
    </tr>
  )
}

export default Transaction
