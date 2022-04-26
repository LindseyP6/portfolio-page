import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


function Header() {
  return (
    <div id="header">
        <Switch>
            <div className="navLinks">
              <Link smooth to="/">Home</Link>
              <Link smooth to="/#bio">Bio</Link>
              <Link smooth to='/#projects'>Projects</Link>
              <Link smooth to='/#cats'>Cats</Link>
            </div>
        </Switch>
    </div>
  )
}

export default Header