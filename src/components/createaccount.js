import React from 'react';
import { UserContext } from '../App';
import Card from './card';

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    } 
    return true;
  }

  function handleCreate() {
    console.log(username, email, password);
    if (!validate(username, 'name')) return;
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;
    ctx.users.push({username, email, password});
    setShow(false);
  }
  
  function clearForm() {
    setUserName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
  
  return (
    <Card 
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (
        <>
        Username<br/>
        <input type="input" className="form-control" id="name" placeholder="Enter username" value={username} onChange={e => setUserName(e.currentTarget.value)} /><br />
        Email<br/>
        <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />
        Password<br/>
        <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br />
        <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
        </>
      ):(
        <>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
        </>
        )}
    />
  );
}

export default CreateAccount;