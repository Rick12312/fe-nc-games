import React, { useState, useEffect } from "react";
import { getUsers, getUsersByUsername } from "../api/api.js";

const Users = ({ logIn, user }) => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("tickle122");
  const [logInValue, setLoginValue] = useState("");

  useEffect(() => {
    getUsers().then((userList) => {
      setUsers(userList);
    });
    getUsersByUsername(username).then((user) => {
      setUsername(user);
    });
          
    
  }, [username]);

  const onSubmit = (e) => {
    e.preventDefault();
    getUsersByUsername(username).then((user) => {
      setUsername(user);
    });
    
  };

  return (
    <>
      <div className="Users">
        <form
          onSubmit={onSubmit}
          onChange={(e) => {
            setUsername(e.target.value);
            logIn(e.target.value)
          }}
        >
          <h2>Select user</h2>
          <select className="Users_select">
            {users.map(({ username }) => {
              return (
                <option key={username} value={username}>
                  {username}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      
      <div className="Users_container">
        <img
          className="Users_select_image"
          src={username.avatar_url}
          alt={username.username}
        />
        <div className="Users_select_container">
          {username.username && <p>Username: {username.username}</p>}
          {username.username && (
            <p className="Users_user_name">Name: {username.name}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;