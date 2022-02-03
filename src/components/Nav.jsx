import React, {useState} from "react";
import { Link } from 'react-router-dom';

const Nav = ({ logIn, user }) => {

  //   const [logInValue, setLoginValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   logIn(logInValue);
  // };

  return (
    // <div className="Nav_Container">
    <nav className="Nav">   
        <Link className= "Nav_link" to="/">Home</Link>
        <Link className= "Nav_link" to="/users">Login</Link>
        <Link className= "Nav_link" to="/reviews">Reviews</Link>
        {/* <Link className= "Nav_link" to="/categories">Categories</Link> */}
        {/* <Link className="Nav_link" to="/login">Login</Link> */}
        <Link className="Nav_link" to="/category">Category</Link>
        <Link className= "Nav_link" to="/users">Login</Link>
    </nav>

  /* {user ? <p>Signed in as <b>{user}</b></p> : null}
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
      </div> */
  );
};

export default Nav;
