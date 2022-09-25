

import React from "react";
//const {date, description,category,amount} = props
//const props = {description,date,category,amount}
function Transaction({date,description,category,amount}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;