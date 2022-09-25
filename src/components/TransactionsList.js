import React, { useEffect, useState } from "react";
import Transaction from "./Transaction";

function TransactionsList(props) {
  const transactions = props.transactions;
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
        {transactions.map(t => {
          return (
            <Transaction
              key={t.id}
              date={t.date}
              description={t.description}
              category={t.category}
              amount={t.amount}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default TransactionsList;
