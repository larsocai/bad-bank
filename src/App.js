import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./containers/navbar";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import LoginForm from "./components/Login";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Balance from "./components/Balance";
import AllData from "./components/AllData";
import React, { useState } from "react";

// Create UserContext
export const UserContext = React.createContext({
  balance: 0,
  setBalance: () => {},
  users: [],
  setUsers: () => {},
  currentUser: {},
  setCurrentUser: () => {},
});

function App() {
  const [balance, setBalance] = useState(0);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({}); // add this line

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        balance,
        setBalance,
        currentUser,
        setCurrentUser,
      }}
    >
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/deposit"
            element={<Deposit balance={balance} setBalance={setBalance} />}
          />
          <Route
            path="/withdraw"
            element={<Withdraw balance={balance} setBalance={setBalance} />}
          />
          <Route path="/balance" element={<Balance balance={balance} />} />
          <Route path="/alldata" element={<AllData />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
