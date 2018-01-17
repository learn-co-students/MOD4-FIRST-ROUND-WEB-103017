import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactionsData: [],
      searchValue: '',
      staticTransactions: []
    }
  }


  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(data => data.json())
    .then(data => this.setState({transactionsData: data, staticTransactions: data}))
  }


  handleChange = (event) => {
    const searchValue = event.target.value
    const searchLength = searchValue.length
    const filteredTransactions = this.state.staticTransactions.filter((transaction) => {
      // return (transaction.description.toLowerCase().slice(0, searchLength) === searchValue.toLowerCase())||(transaction.category.toLowerCase().slice(0, searchLength) === searchValue.toLowerCase())
      return (transaction.description.toLowerCase().match(searchValue.toLowerCase()))||(transaction.category.toLowerCase().match(searchValue.toLowerCase()))
    })
    this.setState({transactionsData: filteredTransactions, searchValue: searchValue})
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} searchValue={this.state.searchValue}/>
        <TransactionsList transactionsData={this.state.transactionsData}/>
      </div>
    )
  }
}

export default AccountContainer
