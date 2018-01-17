import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const URL ='https://boiling-brook-94902.herokuapp.com/transactions';

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
    return fetch(URL).then(resp => resp.json())
  }

  setAllTransactions = () => {
    this.getAPIData().then(json => {
      this.setState({
        transactions: json
      })
    })
  }

  setFilteredTransactions = (currentSearchTerm) => {
    this.getAPIData().then(json => {
      const filteredTransactions = json.filter(trn => {
        return (this.checkIncludes(trn.description, currentSearchTerm) || this.checkIncludes(trn.category, currentSearchTerm))
      })
      this.setState({
        transactions: filteredTransactions
      })
    })
  }

  componentDidMount(){
    this.setAllTransactions()
  }

  checkIncludes = (str, subStr) => {
    return str.toLowerCase().includes(subStr.toLowerCase())
  }

  filterTransactions = () =>{
    const currentSearchTerm = this.state.searchTerm;
    if (currentSearchTerm) {
      this.setFilteredTransactions(currentSearchTerm)
    }else {
      this.setAllTransactions()
    }
  }

  handleChange = (event) => {
    // your code here
    const newSearchTerm = event.target.value;
    this.setState({
      searchTerm: newSearchTerm
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
