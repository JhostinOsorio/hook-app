import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom'
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

const AppRouter = () => {
  return (
    <Router>
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about" component={AboutScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </>
    </Router>
  )
}

export default AppRouter
