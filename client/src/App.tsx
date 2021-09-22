import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login'

function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />

          </Switch>
        </div>
      </Router>
  );
}

export default App;