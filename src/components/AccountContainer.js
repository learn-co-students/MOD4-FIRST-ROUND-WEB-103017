import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: transactions,
      filter: ""
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }


  // componentDidMount(){
  //   fetch("https://boiling-brook-94902.herokuapp.com/transactions")
  //   .then(resp=>resp.json())
  //   .then(json => this.setState(transactions: json))
  // }

  handleChange(event) {
    let value = event.target.value
    console.log("state", this.state);
    this.setState({filter: value})
  }

  render() {
    console.log("in app", this.state)
    return (
      <div>
        <Search handleChange={this.handleChange} filter={this.state.filter}/>
        <TransactionsList transactions = {this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
