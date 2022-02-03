import React, { useState, useEffect } from 'react'
import { getUsers } from '../api/api.js'

const Login = ({ logIn, user }) => {
const [logInValue, setLoginValue] = useState("");

// useEffect(() => {
//   getUsers().then((users) => {
//     setUsersList(users)
//   })
// }, [logInValue])

const handleSubmit = (e) => {
    e.preventDefault();
    logIn(logInValue);
  };
    return ( 
        <div className="Login">
                      
            <form className="Login_form" onSubmit={handleSubmit}>
              <label className="Login_username" htmlFor="login">Username {" "}</label>

              <input
                type="select"
                className="Login_username"
                //value={logInValue}
                onChange={(e) => setLoginValue(e.target.value)}
              />

              <button type="submit" className="Login_button">Login</button>
              <p>{user ? <p>Signed in as <b>{user}</b></p> : null}
              </p>

            </form>
        </div>
    )
}

export default Login