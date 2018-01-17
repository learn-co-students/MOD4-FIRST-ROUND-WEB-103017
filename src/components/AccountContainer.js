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
      transactions: [],
      search: '',
      filtered: [],
    }

  }

  filterT = (v) => {
    this.state.transactions.filter( t =>  v === t.category)
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value})
    const url = `https://boiling-brook-94902.herokuapp.com/transactions`;
    fetch(url)
      .then(response => response.json())
      

  }

  componentDidMount() {
    const url = `https://boiling-brook-94902.herokuapp.com/transactions`;
    fetch(url)
      .then(response => response.json())
      .then( json => this.setState({ transactions: json}));
    }

  // api = () => {
  //   const url = `https://boiling-brook-94902.herokuapp.com/transactions`;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then( json => this.setState({ transactions: json}));
  // }

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange} search={this.state.search} />
        <TransactionsList transactions={this.state.transactions} filterT={this.filterT}/>
      </div>
    )
  }
}

export default AccountContainer
