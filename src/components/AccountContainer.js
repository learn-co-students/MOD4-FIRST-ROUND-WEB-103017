import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      searchTerm: ''
    }
  }

  filteredTrans = (arr, term) =>{
    return arr.filter( t => {
      return t.description.includes(term) || t.category.includes(term)
    })
  }



  handleChange = (event) => {
    let searchTerm = event.target.value
    let transactions = this.filteredTrans(this.state.transactions, searchTerm)

    this.setState({ transactions, searchTerm})

    // fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    //   .then(resp => resp.json())
    //   .then(json => this.setState({transactions: this.filteredTrans(json, searchTerm)}))


  }

  componentDidMount = () =>{
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(json => this.setState({ transactions: json}))
  }

  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList trans={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
