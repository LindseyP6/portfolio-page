import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { AiFillMediumCircle } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { BiArrowToTop } from "react-icons/bi";

function Header() {
  return (
    <div id="header">
        <Switch>
            <div className="nav-links">
              {/* <Link smooth to="/#header">Home</Link> */}
              <Link smooth to="/#bio">Bio</Link>
              <Link smooth to='/#tech'>Tech-Stack</Link>
              <Link smooth to='/#projects'>Projects</Link>
              <Link smooth to="/#footer">Contact Me</Link>
              {/* <Link smooth to='/#cats'>Cats</Link> */}
            </div>
        </Switch>
        <div className="my-links">
        {/* <span> */}
          <a href="https://www.linkedin.com/in/lindsey-lee-pregent1613/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>  
          {/* <br></br> */}
          <a href="https://github.com/LindseyP6" target="_blank" rel="noreferrer"><VscGithub /></a> 
          {/* <br></br> */}
          <a href="https://medium.com/@lindsey.lee6" target="_blank" rel="noreferrer"><AiFillMediumCircle /></a>
        {/* </span> */}
        </div>
    </div>
  )
}

export default Header