import React, { useState } from "react";
import Card from "./Card";
import "../stylesheets/Loginpage.css";
import "../App.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    currentUser.username = "";
    currentUser.email = "";
    currentUser.password = "";
    currentUser.balance = 0;
    // Here we verify the entered credentials against the users in UserContext
    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      localStorage.setItem("currentUser", JSON.stringify(userExists));
      setSuccess(true);
      setFailed(false);
      // Here you would typically handle the login, such as by setting a logged-in state
    } else {
      setFailed(true);
      setSuccess(false);
      // Here you could handle the failed login, such as by showing an error message to the user
    }
  };

  return (
    <>
      <div
        className="secondary-image-row"
        style={{
          backgroundImage: "url(./nothingbank3.jpg)",
        }}
      >
        <div>
          <Card
            txtcolor="black"
            header="Login"
            title="No security, no service, no hassel."
            text="Sign in to manage your account."
            body={
              <div>
                <form onSubmit={handleSubmit}>
                  <label className="label">
                    Username <br />
                    <input
                      type="text"
                      value={username}
                      className="form-control"
                      onChange={handleUsernameChange}
                    />
                  </label>
                  <br />
                  <label className="label">
                    Password <br />
                    <input
                      type="password"
                      value={password}
                      className="form-control"
                      onChange={handlePasswordChange}
                    />
                  </label>
                  <br />
                  <input
                    className="btn btn-light"
                    type="submit"
                    value="Login"
                  />
                </form>
                {success && <p>Successfully logged in!</p>}
                {failed && <p>Incorrect Login or Password</p>}
              </div>
            }
          ></Card>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
