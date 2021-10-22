import React, { useState } from "react";
const Header = ({ logIn, user }) => {
  const [logInValue, setLoginValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(logInValue);
  };

  return (
    <header className="Header">
      <h1>NC Board Game Reviews</h1>
      {user ? <p>Signed in as <b>{user}</b></p> : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="login">Username:</label>
        <input
          type="text"
          id="login"
          value={logInValue}
          onChange={(e) => setLoginValue(e.target.value)}
        />
        <button type="submit" className="Header_login_button">Login</button>
      </form>
    </header>
  );
};

export default Header;
