import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminControl from './Admin/Pages/AdminContol';
import Admin from './Admin/Pages/Admin/Admin';
import './App.css';
import Navbar from './SharedComponents/UIElements/Navbar/Navbar';
import Home from './Pages/Homepage/Home';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import SignInForm from './Pages/SignIn/SignInForm';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin/control'>
          <AdminControl />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/checkout'>
          <Navbar />
          <CheckoutPage />
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
      </Switch>
    </Router>
  );
}

export default App;
