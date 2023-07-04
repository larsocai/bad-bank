import React, { useState } from 'react';


const Deposit = ({ balance, setBalance }) => {
  const [deposit, setDeposit] = useState(0);
  const [validTransaction, setValidTransaction] = useState(false);
  const handleChange = (event) => {
    const amount = Number(event.target.value);
    if (amount <= 0) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
      setDeposit(amount);
    }
  };

  const handleSubmit = (event) => {
    const newTotal = balance + deposit;
    setBalance(newTotal);
    setValidTransaction(false);
    event.target.reset(); // Clear the form input
    event.preventDefault();
  };

  let status = `Account Balance $ ${balance} `;

  return (
    <form onSubmit={handleSubmit}>
    <h2 id="total">{status}</h2>
    <label className="label huge">
      <h3>Deposit</h3>
      <input id="number-input" type="number" width="200" onChange={handleChange} /><br /><br />
      <input type="submit" disabled={!validTransaction} width="200" value="Confirm" id="submit-input" />
    </label>
    </form>
  );
};

export default Deposit;
