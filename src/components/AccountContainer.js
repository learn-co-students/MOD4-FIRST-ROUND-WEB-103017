import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      typed: "",
      toDisplay: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let toEnter = event.target.value;
    let toShow = transactions.filter(
      trans =>
        trans.category.toLowerCase().includes(event.target.value) ||
        trans.description.toLowerCase().includes(this.state.typed)
    );
    console.log(toEnter, toShow);
    this.setState({ typed: toEnter }, console.log(this.state.typed));
    this.setState({ toDisplay: toShow });
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(obj => {
        this.setState({ transactions: obj });
        this.setState({ toDisplay: obj });
      });
  }

  render() {
    console.log(this.state.toDisplay, "1");
    return (
      <div>
        <Search handleChange={this.handleChange} typed={this.state.typed} />
        <TransactionsList
          transactions={this.state.toDisplay}
          original={this.state.transactions}
        />
      </div>
    );
  }
}

export default AccountContainer;
