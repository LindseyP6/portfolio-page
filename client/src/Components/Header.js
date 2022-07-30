import React from "react";

import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { AiFillMediumCircle } from "react-icons/ai";

import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    // <div id="header">

    <Navbar expand="lg" id="header" sticky="top">
      <Container>
        <Navbar.Brand
          href="https://www.linkedin.com/in/lindsey-lee-pregent1613/"
          target="_blank"
          rel="noreferrer"
          bsPrefix="my-links"
        >
          <AiOutlineLinkedin />
        </Navbar.Brand>
        <Navbar.Brand
          href="https://github.com/LindseyP6"
          target="_blank"
          rel="noreferrer"
          bsPrefix="my-links"

        >
          <VscGithub />
        </Navbar.Brand>
        <Navbar.Brand
          href="https://medium.com/@lindsey.lee6"
          target="_blank"
          rel="noreferrer"
                    bsPrefix="my-links"

        >
          <AiFillMediumCircle />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="nav-links" navbarScroll>
            <Nav.Link href="#bio">Bio</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    //  </div>
  );
}

export default Header;
