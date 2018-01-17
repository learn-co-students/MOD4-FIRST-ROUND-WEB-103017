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
      filter: '',
      filteredTransactions: transactions
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(json => this.setState({
          transactions: json,
          filteredTransactions: json
      }))
  }

  filterTransactions = () => {
    let filteredTransactions
    console.log("length", this.state.filter.length);
    if (!this.state.filter.length) {
      console.log('no filter', this.state.filteredTransactions);
      this.setState({
        filteredTransactions: this.state.transactions
      })
    } else if (this.state.filter.length) {
      console.log('filter', this.state.filter);
      filteredTransactions = this.state.transactions.filter(t => {
        let tDesc = t.description.toLowerCase()
        let tCat = t.category.toLowerCase()

        let filter = this.state.filter.toLowerCase()
          return tDesc.includes(filter) || tCat.includes(filter)

      })
      this.setState({
        filteredTransactions: filteredTransactions
      })
    }
    console.log('filteredTransactions', filteredTransactions);
    // this.state.transactions.filter(t => {
    //   return(
    //     this.state.transactions.description === this.state.filter || this.state.transactions.catgory === this.state.filter
    //   )
    // })
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      filter: event.target.value
    }, this.filterTransactions)
  }

  render() {
    console.log("Trans:", this.state.transactions);
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.filteredTransactions} />
      </div>
    )
  }
}

export default AccountContainer
