import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer">
        Thanks!      <span>
            <AiOutlineMail/> 
            <a href="https://www.linkedin.com/in/lindsey-lee-pregent-01896813a/" target="_blank"><AiOutlineLinkedin /></a>
            <a href="https://github.com/LindseyP6" target="_blank"><VscGithub /></a> 
            <a href="https://www.instagram.com/allcatsarebeautiful_bktnr/" target="_blank"><AiOutlineInstagram /></a>
        </span>
    </div>
  )
}

export default Footer