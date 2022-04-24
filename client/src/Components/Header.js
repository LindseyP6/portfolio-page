import React from 'react';
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


function Header() {
  return (
    <div className="header">
        <div className="headerBio">
            <h1>Full Stack Developer</h1>
            <br></br>
            <h6>React | Ruby</h6>
            <br></br>
            <h1>Cat Rescuer.</h1>
        </div>
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