import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state={
      transactions: [],
      transactionsDisplayed:[],
      search:"",

    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }


  handleChange=(event)=> {
    // your code here
    console.log(event.target.value);
    this.setState({
      search: event.target.value
    })
  }

  componentDidMount(){
    console.log(this.state.transactions);
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(json => this.setState({transactions: json}))
  }
  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>

        <TransactionsList
        filter={this.state.search} transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
