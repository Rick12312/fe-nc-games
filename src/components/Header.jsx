import React, { useState } from "react";
import logo from '../images/logo.png'



const Header = ({ logIn, user }) => {
  // const [logInValue, setLoginValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   logIn(logInValue);
  // };

  return (
    <header className="Header">
      <img src={logo} alt="logo" height="300px" width="300px"/>
          {/* {user ? <p>Signed in as <b>{user}</b></p> : null} */}
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="login">Username:</label>
        <input
          type="text"
          id="login"
          value={logInValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <button type="submit" className="Header_login_button">Login</button>
      </form> */}
      {user ? <p className="Header_user_label">Logged in as <b>{user}</b></p> : null}
      
    </header>
  );
};

export default Header;
