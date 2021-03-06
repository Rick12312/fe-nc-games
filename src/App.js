import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Users from "./components/Users";
import Error from "./components/Error";
import Category from "./components/Category";
import Reviews from "./components/Reviews";

function App() {
  const [user, setUser] = useState(null);

  const logIn = (username) => {
    setUser(username);
    localStorage.setItem("loggedInUser", username);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem("loggedInUser");

    if (prevLoggedInUser) {
      setUser(prevLoggedInUser);
    }
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users logIn={logIn} user={user} logOut={logOut} />
        </Route>
        <Route path="/review/:id">
          <Reviews />
        </Route>
        <Route exact path="/category">
          <Category />
        </Route>
        <Route path="/">
          <Error />
        </Route>
      </Switch>
      <div className="App_footer">
        <p>NC Board Game Reviews - Author Richard Noble</p>
      </div>
    </div>
  );
}

export default App;
