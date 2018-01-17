import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(json => this.setState({ transactions: json }));
  }

  searchHandler = event => {
    let value = event.target.value;
    this.setState({ searchTerm: value });
  };

  render() {
    return (
      <div>
        <Search searchHandler={this.searchHandler} />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default AccountContainer;
