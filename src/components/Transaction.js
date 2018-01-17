import React from "react";

const Transaction = props => {
  // console.log(props);
  return (
    <tr>
      <td>{props.info.posted_at}</td>
      <td>{props.info.description}</td>
      <td>{props.info.category}</td>
      <td>{props.info.amount}</td>
    </tr>
  );
};

export default Transaction;
