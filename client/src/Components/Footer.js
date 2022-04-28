import React from 'react'
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { AiFillMediumCircle } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";


function Footer() {
  return (
    <div id="footer">
        {/* See ya soon!       */}
        <span>
          <a href = "mailto: lindsey.pregent@gmail.com" target="_blank" rel="noreferrer"><HiOutlineMailOpen/></a>
          <a href="https://www.linkedin.com/in/lindsey-lee-pregent1613/" target="_blank" rel="noreferrer"><AiOutlineLinkedin /></a>
          <a href="https://github.com/LindseyP6" target="_blank" rel="noreferrer"><VscGithub /></a> 
          <a href="https://www.instagram.com/allcatsarebeautiful_bktnr/" target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
          <a href="https://medium.com/@lindsey.lee6" target="_blank" rel="noreferrer"><AiFillMediumCircle /></a>
          <a href="https://medium.com/@lindsey.lee6" target="_blank" rel="noreferrer"><RiTwitterLine /></a>
          <Link className="toTop" smooth to="/#header">Top</Link>
        </span>
    </div>
  )
}

export default Footer