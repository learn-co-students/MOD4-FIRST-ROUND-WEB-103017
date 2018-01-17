import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {


  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []

    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactions => this.setState(
      {
      transactions: transactions,
      // searchTerm: transactions.description
      //in here I will create a search for description for a certain word that happens onChange
      // I have to filter through the description string
      }
  ))
  }


  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, this.fetchData())
  }

  filterSearchTerm(){
    //use this to filter 
  }

  render() {
    console.log('currently in account container, the state is', this.state)
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList transactions = {this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
