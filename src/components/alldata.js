import React from "react";
import Card from "./Card";
import "../stylesheets/Alldatapage.css";
import "../App.css";

function AllData() {
  const users = JSON.parse(localStorage.getItem("users"));
  return (
    <>
      <div
        className="secondary-image-row"
        style={{
          backgroundImage: "url(./nothingbank5.jpg)",
        }}
      >
        <div className="card-layout">
          {users.map((user) => {
            const { username } = user;
            return (
              <Card
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
      </div>
    </>
  );
}

export default AllData;
