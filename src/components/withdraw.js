import React, { useState } from "react";

const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWithdraw = (event) => {
    event.preventDefault();
    if (withdrawAmount <= 0) {
      setErrorMessage("Invalid amount. Please enter a positive value.");
      return;
    }
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const users = JSON.parse(localStorage.getItem("users"));
    console.log("current user", currentUser);
    console.log("users", users);
    const balance = currentUser.balance;
    const newTotal = balance - withdrawAmount;

    if (withdrawAmount > balance) {
      setErrorMessage("Insufficient funds.");
      return;
    }
    currentUser.balance = newTotal;

    // Update the balance in the users array
    const updatedUsers = users.map((user) => {
      if (user.username === currentUser.username) {
        user.balance = newTotal;
      }
      return user;
    });
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setWithdrawAmount(0);
    setErrorMessage("");
  };

  const handleInputChange = (event) => {
    setWithdrawAmount(parseFloat(event.target.value));
  };

  return (
    <div>
      <h2>
        Account Balance: ${" "}
        {JSON.parse(localStorage.getItem("currentUser")).balance}
      </h2>

      <form onSubmit={handleWithdraw}>
        <label>
          Withdraw Amount:
          <input
            type="number"
            value={withdrawAmount}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Withdraw</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Withdraw;
