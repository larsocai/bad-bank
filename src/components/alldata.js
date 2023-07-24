import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../stylesheets/Alldatapage.css";
import "../App.css";

function AllData() {
  const [users, setUsers] = useState([]);
  const [usersExist, setUsersExist] = useState(false);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("users")));
  }, []);
  useEffect(() => {
    if (users && users.length > 0) {
      setUsersExist(true);
    } else {
      setUsersExist(false);
    }
  }, [users]);

  return (
    <>
      <div
        className="secondary-image-row"
        style={{
          backgroundImage: "url(./nothingbank5.jpg)",
        }}
      >
        {usersExist && (
          <div className="card-layout">
            {users.map((user, index) => {
              const { username } = user;
              return (
                <Card
                  key={index}
                  txtcolor="black"
                  header={username}
                  // title="Keep track of your information."
                  text="If this information isn't yours, please ignore it."
                  body={
                    <div key={username}>
                      <h3>Email: {user.email}</h3>
                      <h3>Password: {user.password}</h3>
                      <h3>Balance: ${user.balance}</h3>
                      &nbsp;
                    </div>
                  }
                ></Card>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default AllData;
