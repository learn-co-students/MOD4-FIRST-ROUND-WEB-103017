import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      filteredTransactions: false,
      search: ""
    }
  }

  componentDidMount(){
     fetch('https://boiling-brook-94902.herokuapp.com/transactions')
     .then(resp => resp.json())
     .then(json => this.setState({transactions: json}))
  }

  handleChange = (event) => {
    this.setState({search: event.target.value}, this.filterTransactions)
  }

  filterTransactions = () => {
    if (this.state.search === "") {
      this.setState({filteredTransactions: false})
    }

    let myTs = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.search.toLowerCase()))
    this.setState({filteredTransactions: myTs}, () => console.log(myTs))
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} search={this.state.search}/>
        <TransactionsList transactions={this.state.filteredTransactions ? this.state.filteredTransactions : this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
