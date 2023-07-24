import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [status, setStatus] = useState("");
  const [makeWithdraw, setMakeWithdraw] = useState(false);

  const handleWithdraw = (event) => {
    event.preventDefault();
    if (
      withdrawAmount <= 0 ||
      !withdrawAmount ||
      typeof withdrawAmount !== "number"
    ) {
      setErrorMessage("Invalid amount. Please enter a positive value.");
      return;
    }
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    setUsers(JSON.parse(localStorage.getItem("users")));
    const balance = currentUser.balance;
    const newTotal = balance - withdrawAmount;

    if (withdrawAmount > balance) {
      setErrorMessage("Insufficient funds.");
      return;
    }
    currentUser.balance = newTotal;
    setMakeWithdraw(!makeWithdraw);

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
    setWithdrawAmount(0);
    setErrorMessage("");
  };

  const handleInputChange = (event) => {
    setWithdrawAmount(parseFloat(event.target.value));
  };

  useEffect(() => {
    setCurrentUser(
      JSON.parse(localStorage.getItem("currentUser"))
        ? JSON.parse(localStorage.getItem("currentUser"))
        : {}
    );
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, [makeWithdraw]);

  useEffect(() => {
    setStatus(`Balance: $${currentUser.balance} `);
  }, [makeWithdraw, currentUser]);

  return (
    <div
      className="secondary-image-row"
      style={{
        backgroundImage: "url(./nothingbank2.jpg)",
      }}
    >
      {currentUser.username && (
        <div>
          <Card
            txtcolor="black"
            header="Withdrawal"
            // title="No security, no service, no hassel."
            // text="Sign in to manage your account."
            body={
              <div>
                <div>
                  <h2>{status}</h2>

                  <form onSubmit={handleWithdraw}>
                    <label className="label huge">
                      Withdraw Amount <br />
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      value={withdrawAmount}
                      onChange={handleInputChange}
                    />
                    <br />
                    <button className="btn btn-light" type="submit">
                      Withdraw
                    </button>
                  </form>
                  {success && <p>Success!</p>}
                  {errorMessage && <p>{errorMessage}</p>}
                </div>
              </div>
            }
          ></Card>
        </div>
      )}
    </div>
  );
};

export default Withdraw;
