import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: "",
      transactions: []
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.updateSearchTerm = this.updateSearchTerm.bind(this);

  }
  componentDidMount = () =>
  {
    // this.setState({transactions: transactions})
    //set state of transactions
    fetch('https://boiling-brook-94902.herokuapp.com/transactions').then(resp => resp.json()).then(json => this.setState({transactions: json }))
  }
  updateSearchTerm = (term) =>
  {
    this.setState({searchTerm: term})
  }

  handleChange = (event) => {
    //can filter by cat
     const filteredTerms = transactions.filter(function(trans){return event.target.value === trans.category})
     console.log(filteredTerms)
     this.setState({transactions: filteredTerms})
  }

  render() {

    return (
      <div>
        <Search inputCallback={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    )
  }
}

export default AccountContainer
