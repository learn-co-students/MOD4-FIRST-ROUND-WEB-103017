import React, { Component } from "react"
import TransactionsList from "./TransactionsList"
import Search from "./Search"

class AccountContainer extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      searchInput: ""
    }
  }

  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then((resp) => resp.json())
      .then((transactions) => this.setState({ transactions: transactions }))
  }

  handleChange = (event) => {
    const value = event.target.value
    this.setState({ searchInput: value })

    const filteredArray = this.state.transactions.filter(
      (transaction) =>
        transaction.category
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase()) ||
        transaction.description
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase())
    )

    this.setState({ transactions: filteredArray })
  }

  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          searchInput={this.state.searchInput}
        />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
