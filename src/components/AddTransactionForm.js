import React, { useState } from "react";

function AddTransactionForm(props) {

  const transactions = props.transactions;
  const setTransactions = props.setTransactions;

  const [state, setState] = useState({});

  function handleSubmit(evt) {
    evt.preventDefault();
    fetch('http://127.0.0.1:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => {
        setTransactions([
          ...transactions,
          data
        ]);
      })
  }

  function handleChange(evt) {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
    });
  }

  console.log(state);

  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input onChange={handleChange} type="date" name="date" />
          <input onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
