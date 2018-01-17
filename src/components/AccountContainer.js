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
      transactions: transactions,
      value: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(res => res.json())
      .then(json => this.setState({transactions:json}))
  }

  handleChange(event) {
    this.setState({value: event.target.value}, (console.log(this.state.value)));
  }

  render() {
    let filteredTransactions = this.state.transactions.filter(transaction => (
      transaction.description.toLowerCase().includes(this.state.value.toLowerCase()) ||
      transaction.category.toLowerCase().includes(this.state.value.toLowerCase())
    ))

    return (
      <div>
        <Search handleChange={this.handleChange} value={this.state.value}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer
