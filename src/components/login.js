import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false)
  const [failed, setFailed] = useState(false)
  const ctx = useContext(UserContext); // Use the same context to access users

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

const handleSubmit = (e) => {
  e.preventDefault();
  // Here we verify the entered credentials against the users in UserContext
  const user = ctx.users.find(user => user.username === username && user.password === password);
  if (user) {
    setSuccess(true)
    setFailed(false)
    // Here you would typically handle the login, such as by setting a logged-in state
  } else {
    setFailed(true)
    setSuccess(false)
    // Here you could handle the failed login, such as by showing an error message to the user
  }
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <input type="submit" value="Log In" />
      </form>
      {success && (
        <p>Successfully logged in!</p>
      )} 
      {failed && (
        <p>Incorrect Login or Password</p>
      )} 
    </div>
  );
}

export default LoginForm;
