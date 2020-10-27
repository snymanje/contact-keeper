import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contact/ContactState";

import "./App.css";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
