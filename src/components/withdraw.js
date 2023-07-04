import React, { useState } from 'react';

const Withdraw = ({ balance, setBalance }) => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleWithdraw = (event) => {
    event.preventDefault();

    if (withdrawAmount <= 0) {
      setErrorMessage('Invalid amount. Please enter a positive value.');
      return;
    }

    if (withdrawAmount > balance) {
      setErrorMessage('Insufficient funds.');
      return;
    }

    setBalance(balance - withdrawAmount);
    setWithdrawAmount('');
    setErrorMessage('');
  };

  const handleInputChange = (event) => {
    setWithdrawAmount(parseFloat(event.target.value));
  };

  return (
    <div>
      <h2>Account Balance: $ {balance}</h2>

      <form onSubmit={handleWithdraw}>
        <label>
          Withdraw Amount:
          <input type="number" value={withdrawAmount} onChange={handleInputChange} />
        </label>
        <button type="submit">Withdraw</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Withdraw;
