import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList(props) {
 
  let transactions = props.transactions;
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactions.map(transactions => {
          return (
            <Transaction
              key={transactions.id}
              date={transactions.date}
              description={transactions.description}
              category={transactions.category}
              amount={transactions.amount}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;
