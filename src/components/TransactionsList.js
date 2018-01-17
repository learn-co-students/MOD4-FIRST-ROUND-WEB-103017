import React from 'react';
import Transaction from './Transaction';

const TransactionsList = (props) => {
 let transactions = props.transactions
 let newTrans

 newTrans = transactions.map((trans, i) => {
   return(
     <Transaction
       data={trans}
       key={i}
      />
   );
  })


  return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">
                Posted At
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Description
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Category
              </h3>
            </th>
            <th>
              <h3 className="ui center aligned header">
                Amount
              </h3>
            </th>
          </tr>
          { newTrans }

        </tbody>
      </table>
    //   <div>
    //   // <Transaction  />
    // </div>
  )
}

export default TransactionsList
