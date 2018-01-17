import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const transactions = props.searchTerm ? props.transactions.filter((transaction, i) =>
    transaction.description.toUpperCase().includes(props.searchTerm.toUpperCase()) || transaction.category.toUpperCase().includes(props.searchTerm.toUpperCase())
  ) : props.transactions

  // const transactionRows = transactions.map((transaction, i) => < Transaction transaction={transaction} key={i} />)

  // The code below accounts for a long fetch request. Since I have my this.state.transaction set to an empty array, I can still map over it with no problem, but not results to the user. For some reason if the fetch request fails, this message on the falsey side of the ternary will be rendered to the screen.
  const transactionRows = props.transactions.length ? transactions.map((transaction, i) => < Transaction transaction={transaction} key={i} />) : <tr><td>...taking a while to get your money</td></tr>

  //With a litte more time, I would display a message saying 'No results' to the user after running through the filter and account for more user input errors besides just checking the case of the characters. 

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

        {transactionRows}

      </tbody>
    </table>
  )
}

export default TransactionsList
