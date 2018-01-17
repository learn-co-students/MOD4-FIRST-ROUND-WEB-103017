import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'
const URL = `https://boiling-brook-94902.herokuapp.com/transactions`

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions:[],
      searchTerm: ''
    }

  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json())
      .then(transactions => this.setState({ transactions: transactions }))
  }

  handleChange = (event) => {
    // your code here
    this.setState({
      searchTerm : event.target.value
    })
  }

  render() {
    return (
      <div>
        <Search
          searchTerm={this.state.searchTerm}
          handleChange={this.handleChange}
          />
        <TransactionsList
          transactions={this.state.transactions}
          searchTerm={this.state.searchTerm}
        />
      </div>
    )
  }
}

export default AccountContainer
