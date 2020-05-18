import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/SignUp';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
