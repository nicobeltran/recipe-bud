import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './containers/Login'
import Signup from './containers/Signup'
import Dashboard from './containers/Dashboard'
import { AuthProvider } from './context/authcontext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [user, setUser] = useState({
    user_id:0,
    email:"",
    name: ""
  })

  return (
    <AuthProvider user={user}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/recipes" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
