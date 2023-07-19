import React from "react";

function AllData() {
  const users = JSON.parse(localStorage.getItem("users"));
  return (
    <div>
      <h1>All Data</h1>
      {users.map((user) => {
        const { username } = user;
        return (
          <div key={username}>
            <h3>Name: {username}</h3>
            <h4>Balance: ${user.balance}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default AllData;
