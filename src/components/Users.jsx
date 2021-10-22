import React, { useState, useEffect } from "react";
import { getUsers, getUsersByUsername } from "../api/api.js";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("tickle122");

  useEffect(() => {
    getUsers().then((userList) => {
      setUsers(userList);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    getUsersByUsername(username).then((user) => {
      setUsername(user);
    });
  };

  return (
    <div className="Users">
      <form
        onSubmit={onSubmit}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      >
        <p>Search Users</p>
        <select className="Users_select">
          {users.map(({ username }) => {
            return (
              <option key={username} value={username}>
                {username}
              </option>
            );
          })}
        </select>
        <button type="submit">Submit</button>
      </form>
      <img className="Users_select_image" src={username.avatar_url} alt={username.username} />
      <div className="Users_select_container">
          {username.username && <p>Username: {username.username}</p>}
          {username.name && <p className="Users_user_name">Name: {username.name}</p>}
      </div>

    
    </div>
  );
};

export default Users;
