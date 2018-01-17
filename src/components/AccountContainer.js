import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      transactions: [],
      filtered: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
      .then(resp => resp.json())
      .then(json => this.setState({
        transactions: json,
        filtered: json
      }))
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    }, () => this.filter())
  }

  filter = () => {
    let query = this.state.search.toLowerCase()

    let found = this.state.transactions.filter(el => {
      return (el.description.toLowerCase() + ' ' + el.category.toLowerCase()).includes(query.toLowerCase()) 
    })

    this.setState({
      filtered: found
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} search={this.state.search}/>
        <TransactionsList transactions={this.state.filtered}/>
      </div>
    )
  }
}

export default AccountContainer
