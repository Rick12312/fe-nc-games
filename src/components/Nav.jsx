import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
        <Link className= "Nav_link" to="/">Home</Link>
        <Link className= "Nav_link" to="/users">Users</Link>
        <Link className= "Nav_link" to="/reviews">Reviews</Link>
        <Link className= "Nav_link" to="/categories">Categories</Link>
    </nav>
  );
};

export default Nav;
