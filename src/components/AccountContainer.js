import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state ={
      transactions: [],
      searchTerm: ''
    }

  }

  getAPIData = () => {
    return fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(resp => resp.json())
  }

  componentDidMount(){
    this.getAPIData().then(json => {
      this.setState({
        transactions: json
      })
    })
  }

  check

  filterTransactions = () =>{
    const currentSearchTerm = this.state.searchTerm;
    if (currentSearchTerm) {
      this.getAPIData().then(json => {
        const filteredTransactions = json.filter(trn => {
          return (trn.description.toLowerCase().includes(currentSearchTerm.toLowerCase()) || trn.category.toLowerCase().includes(currentSearchTerm.toLowerCase()))
        })
        this.setState({
          transactions: filteredTransactions
        })
      })
    }else {
      this.getAPIData().then(json => {
        this.setState({
          transactions: json
        })
      })
    }
  }

  handleChange = (event) => {
    // your code here
    this.setState({
      searchTerm: event.target.value
    }, this.filterTransactions)
  }

  render() {
    const {transactions, searchTerm} = this.state
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={searchTerm}/>
        <TransactionsList transactions={transactions}/>
      </div>
    )
  }
}

export default AccountContainer
