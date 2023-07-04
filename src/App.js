import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './containers/navbar';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import Balance from './components/balance';
import AllData from './components/alldata';
import React from 'react';

// Create UserContext
export const UserContext = React.createContext();

function App() {
  const users = [
    { name: 'abel', email: 'abel@mit.edu', password: 'secret', balance: 100 },
  ];

  return (
    <UserContext.Provider value={{ users }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/balance' element={<Balance />} />
          <Route path='/alldata' element={<AllData />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
