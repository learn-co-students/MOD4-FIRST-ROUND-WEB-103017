import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: transactions
      filter: ""
    }
  }

  // componentDidMount() {
  //   this.setState({
  //     transactions: transactions
  //   })
  // }
  filterTransactions = () => {
    tranactions.filter(t => {
      return(
        this.state.transactions.description === this.state.filter || this.state.transactions.catgory === this.state.filter 
      )
    })
  }

  handleChange(event) {
    // your code here
    this.setState({
      filter: event.target.value
    });
  }

  render() {
    console.log("AccountContainer:", this.state.transactions);
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
