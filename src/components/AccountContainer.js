import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()


    this.state = {
      transactions: [],
      searchTerm: '',
    }

  }

  fetchTransactions = () => {
    fetch(' https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState({
      transactions: transactions,
    }))
  }

  componentDidMount() {
    this.fetchTransactions();
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    const filteredTransactions = [...this.state.transactions].filter(transaction => transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()));

      console.log(filteredTransactions);
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <TransactionsList filteredTransactions={filteredTransactions}/>
      </div>
    )
  }
}

export default AccountContainer;

// const filteredTransactions = this.state.transactions.filter(transaction => {
//   transaction.category.includes(this.state.searchTerm) || transaction.description.includes(this.state.searchTerm)
//   });
