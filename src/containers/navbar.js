import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../stylesheets/navbar.css";

function NavBar() {
  const [active, setActive] = useState("/");
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url, { replace: true });
    setActive(url);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div
            className="navbar-brand"
            onClick={() => handleNavigate("/")}
            title="Home"
          >
            NB
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div
                  className={
                    active === "/createaccount" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleNavigate("/createaccount")}
                  title="Create a new account"
                >
                  Create Account
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    active === "/login" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleNavigate("/login")}
                  title="Login to your account"
                >
                  Login
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    active === "/deposit" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleNavigate("/deposit")}
                  title="Deposit money"
                >
                  Deposit
                </div>
              </li>
              <li className="nav-item">
                <div
                  className={
                    active === "/withdraw" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleNavigate("/withdraw")}
                  title="Withdraw money"
                >
                  Withdraw
                </div>
              </li>
              {/* <li className="nav-item">
                            <a className="nav-link" href="/balance/">Balance</a>
                        </li> */}
              <li className="nav-item">
                <div
                  className={
                    active === "/alldata" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handleNavigate("/alldata")}
                  title="Find your data"
                >
                  All Data
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
