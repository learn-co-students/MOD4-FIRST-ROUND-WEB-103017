import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      filteredTransactions: []
    };

    this.handleChange = this.handleChange.bind(this); // why do i need this
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  fetchTransactions() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(json =>
        this.setState({ transactions: json, filteredTransactions: json })
      );
  }

  handleChange(e) {
    const query = e.target.value.toLowerCase().trim();

    const newTransactions = this.state.transactions.filter(transaction => {
      // how to pull this into its own function?? related to the above "this" binding question
      const inDescription = transaction.description
        .toLowerCase()
        .includes(query);
      const inCategory = transaction.category.toLowerCase().includes(query);

      return inDescription || inCategory;
    });

    this.setState({
      filteredTransactions: newTransactions
    });
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} transactions={transactions} />
        <TransactionsList
          transactions={this.state.filteredTransactions}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AccountContainer;
