import React from "react";
import logo from "../images/logo.png";

const Header = ({ user }) => {
  return (
    <header className="Header">
      <img src={logo} alt="logo" height="300px" width="300px" />
      {user ? (
        <p className="Header_user_label">
          Logged in as <b>{user}</b>
        </p>
      ) : null}
    </header>
  );
};

export default Header;
