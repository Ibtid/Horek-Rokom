import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './Admin/Pages/Admin';
import './App.css';
import Navbar from './SharedComponents/UIElements/Navbar/Navbar';
import Home from './Pages/Homepage/Home';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import SignInForm from './Pages/SignIn/SignInForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/orders'>
          <Navbar />
          <h1>ORDERS</h1>
        </Route>
        <Route path='/signin'>
          <SignInForm />
        </Route>
        <Route path='/cart'>
          <Navbar />
          <ShoppingCart />
        </Route>
        <Route path='/'>
          <Navbar />
          <Home />
        </Route>
        <Route path='/:pid'>
          <Navbar />
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
