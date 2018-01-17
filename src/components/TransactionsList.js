import React from "react";
import Transaction from "./Transaction";
const TransactionsList = props => {
  const transactions = props.transactions.map(transaction => {
    let description = transaction.description.toLowerCase();
    let category = transaction.category.toLowerCase();
    let searchTerm = props.searchTerm.toLowerCase();
    return description.includes(searchTerm) ||
      category.includes(searchTerm) ||
      props.searchTerm === "" ? (
      <Transaction
        transaction={transaction}
        id={transaction.id}
        key={transaction.id}
      />
    ) : null;
  });
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Posted At</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions}
      </tbody>
    </table>
  );
};

export default TransactionsList;
