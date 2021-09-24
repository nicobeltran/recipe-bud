import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './containers/Home'
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
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
