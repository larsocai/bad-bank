import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../App.css";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [users, setUsers] = useState([]);

  function validate(field, label) {
    if (!field) {
      setStatus("Please create " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    // If no users item in localStorage, initialize as an empty array

    if (
      !validate(username, "username") ||
      !validate(email, "email") ||
      !validate(password, "password")
    ) {
      return console.log(status);
    }

    const userInfo = {
      username,
      email,
      password,
      balance: 0,
    };

    setUsers([...users, userInfo]);
    localStorage.setItem("users", JSON.stringify([...users, userInfo]));
    setShow(false);
  }

  function clearForm() {
    setUserName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storedUsers ? storedUsers : []);
  }, []);

  return (
    <div
      className="secondary-image-row"
      style={{
        backgroundImage: "url(./nothingbank1.jpg)",
      }}
    >
      <div>
        <Card
          bgcolor="primary"
          header="Create Account"
          status={status}
          body={
            show ? (
              <>
                Username
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="name"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUserName(e.currentTarget.value)}
                />
                <br />
                Email
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleCreate}
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={clearForm}
                >
                  Add another account
                </button>
              </>
            )
          }
        />
      </div>
    </div>
  );
}

export default CreateAccount;
