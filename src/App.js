import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./Admin/Pages/Admin";
import './App.css';
import Navbar from "./components/UIElements/Navbar/Navbar";
import Home from "./Pages/Homepage/Home";

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/orders">
          <Navbar/>
          <h1>ORDERS</h1>
        </Route>
        <Route path="/productDetails">
          <Navbar/>
          <h1>DETAILS</h1>
        </Route>
        <Route path="/signin">
          <h1>SignIN</h1>
        </Route>
        <Route path="/cart">
          <Navbar/>
          <h1>Cart</h1>
        </Route>
        <Route path="/">
          <Navbar/>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
