import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactions: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(json => this.setState({transactions: json}))
  }


  handleChange = e => {
    const value = e.target.value;
    this.setState({
      searchTerm: value
    }, () => fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(json => this.setState({transactions: json})))
  }

  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          value={this.state.searchTerm}
        />
        <TransactionsList
          transactions={this.state.transactions}
        />
      </div>
    )
  }
}

export default AccountContainer;
