import React from 'react';
import Home from './Components/Home/Home';
import Header from './Layout/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Layout/Auth/Login/Login';

function App() {
  return (
    // BEM
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
