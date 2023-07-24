import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";

const Deposit = () => {
  const [deposit, setDeposit] = useState(0);
  const [validTransaction, setValidTransaction] = useState(false);
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [status, setStatus] = useState("");
  const [makeDeposit, setMakeDeposit] = useState(false);

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
    event.preventDefault();
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    setUsers(JSON.parse(localStorage.getItem("users")));
    const balance = currentUser.balance;
    const newTotal = balance + deposit;
    // Update the current user balance
    currentUser.balance = newTotal;
    setMakeDeposit(!makeDeposit);

    // Update the balance in the users array
    const updatedUsers = users.map((user) => {
      if (user.username === currentUser.username) {
        user.balance = newTotal;
        setSuccess(true);
      }
      return user;
    });
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setValidTransaction(false);
    event.target.reset(); // Clear the form input
  };

  useEffect(() => {
    setCurrentUser(
      JSON.parse(localStorage.getItem("currentUser"))
        ? JSON.parse(localStorage.getItem("currentUser"))
        : {}
    );
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, [makeDeposit]);

  useEffect(() => {
    setStatus(`Balance: $${currentUser.balance} `);
  }, [makeDeposit, currentUser]);

  return (
    <>
      <div
        className="secondary-image-row"
        style={{
          backgroundImage: "url(./nothingbank4.jpg)",
        }}
      >
        {currentUser.username && (
          <div>
            <Card
              txtcolor="black"
              header="Deposit"
              // title="No security, no service, no hassel."
              // text="Sign in to manage your account."
              body={
                <div>
                  <form onSubmit={handleSubmit}>
                    <h2 id="total">{status}</h2>
                    <label className="label huge">
                      Deposit Amount <br />
                    </label>
                    <input
                      value={deposit}
                      id="number-input"
                      className="form-control"
                      type="number"
                      width="200"
                      onChange={handleChange}
                    />
                    <br />
                    <input
                      type="submit"
                      disabled={!validTransaction}
                      width="200"
                      value="Confirm"
                      id="submit-input"
                      className="btn btn-light"
                    />
                  </form>
                  {success && <p>Success!</p>}
                </div>
              }
            ></Card>
          </div>
        )}
      </div>
    </>
  );
};

export default Deposit;
