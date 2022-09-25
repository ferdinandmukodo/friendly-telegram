import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [search, setSearch] = useState('');
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then(res => res.json())
      .then(data => {
        setTransactions(data);
      });
  }, []);

  return (
    <div>
       
      <Search setSearch={setSearch} />
      <AddTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <TransactionsList
          transactions={transactions.filter(transaction => {
            if (search === '') {
              return true;
            }else
            return transaction.description.includes(search);
            return transaction.amount.includes(search)
          })}
        />
     
    </div>
  );
}

export default AccountContainer;