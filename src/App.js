import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './containers/navbar';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import LoginForm from './components/login';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import Balance from './components/balance';
import AllData from './components/alldata';
import React, { useState } from 'react';

// Create UserContext
export const UserContext = React.createContext();

function App() {
  const [balance, setBalance] = useState(0);
  const users = [];

  return (
    <UserContext.Provider value={{ users }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/deposit' element={<Deposit balance={balance} setBalance={setBalance} />} />
          <Route path='/withdraw' element={<Withdraw balance={balance} setBalance={setBalance} />} />
          <Route path='/balance' element={<Balance balance={balance} />} />
          <Route path='/alldata' element={<AllData />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
