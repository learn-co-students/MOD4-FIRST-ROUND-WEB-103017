import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchInput: "",
      results: [{posted_at: ""}]
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  handleChange = (input) => {
    this.setState({
      searchInput: input
    }, () => {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        results: json
      })
    })}
  )
  // your code here
}

render() {

  return (
    <div>
      <Search callBackFromParent={this.handleChange} />
      <TransactionsList results={this.state.results} term={this.state.searchInput}/>
    </div>
  )
}
}

export default AccountContainer
