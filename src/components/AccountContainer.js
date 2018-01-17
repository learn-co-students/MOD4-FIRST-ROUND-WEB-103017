import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filterTrans: [],
      transactions: []
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res => res.json())
    .then(json => this.setState({
      transactions: json
    }))
  }

  filteredTrans = () => {
    const trans = this.state.transactions.filter(trans => trans.description.toLowerCase().includes(this.state.search.toLowerCase()))

    this.setState({
      filterTrans: trans
    })
  }


  handleChange = (e) => {
    // your code here

    this.setState({
      search: e.target.value
    }, ()=>this.filteredTrans())


  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList filterTrans={this.state.filterTrans} transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
