import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Users from "./components/Users";
import Error from './components/Error';
import SingleReview from "./components/SingleReview";
import Categories from "./components/Categories";

function App() {
  const [user, setUser] = useState(null);

  const logIn = (username) => {
    setUser(username);
    localStorage.setItem('loggedInUser', username)
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser')
  }

  useEffect(() => {
    const prevLoggedInUser = localStorage.getItem('loggedInUser');

    if (prevLoggedInUser) {
      setUser(prevLoggedInUser);
    }
  }, [])

  return (
    <div className="App">
      <Header logIn={logIn} user={user} logOut={logOut}/>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/reviews">
          <SingleReview />
        </Route>
        <Route exact path="/categories">
          <Categories />
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
