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
      query: '',
      transactions: '',
      results: ''
    }
    this.allTransaction = null


  }

  componentWillMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then((resp) => {
      this.setState({transactions: resp, results: resp})
      this.allTransaction = resp
    })
  }

  handleQuery = (query) => {
    if(query.length==0){
      this.setState({query: '', results: this.allTransaction})
    } else{
      this.handleSearch(query)
    }

  }

  handleSearch(query) {
    var transactions = []
    this.state.transactions.map((transaction) => {
      if(transaction.description.toLowerCase().search(query.toLowerCase())>=0){
        transactions.push(transaction)
      }
    })
    this.setState({query: query, results: transactions}, console.log(this.state.results))
  }



  render() {

    return (
      <div>
        <Search handleQuery={this.handleQuery}/>
        <TransactionsList results={this.state.results}/>
      </div>
    )
  }
}

export default AccountContainer
