import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Document, Page } from 'react-pdf';
import resume from './resume.pdf';
import TechStack from './TechStack';

function Bio() {
  const [show, setShow] = useState(false);

  const handleCloseMore = () => setShow(false);
  const handleShowMore = () => setShow(true);

  return (
    <div id="bio">
      <div className="bio-padding"></div>
      <h1>About Me</h1>
        <div className="bio-left">
          <p>Hi! I'm Lindsey and I am excited to be entering the wide world of coding. For 15 years, I worked in various customer service roles: Cashier, Hostess, Barista and Administrative Assistant. I love working with people! After 9 years working in a children's law office, I needed to make a change for myself. I attended Flatiron School from Jan-April 2022 where I learned HMTL, CSS, JavaScript, React, Ruby and Rails. I'm now a Full Stack Software Engineer! I also work in the cat rescue world as a foster and a TNR (trap-neuter-return) certified trapper. I bring my passion for anti-racism, social justice and cat rescue to everything I do.  
          </p>
          <div className="bio-buttons">
            <Button variant="dark">
              <a href="https://www.linkedin.com/in/lindsey-lee-pregent1613/overlay/1635490062046/single-media-viewer/" target="_blank" rel="noreferrer">Resume</a>
            </Button>
            
            <Button variant="dark" onClick={handleShowMore}>
              More!
            </Button>
              <Offcanvas show={show} onHide={handleCloseMore}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
              </Offcanvas>

          </div>

      {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Resume</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a href="https://www.linkedin.com/in/lindsey-lee-pregent1613/overlay/1635490062046/single-media-viewer/" target="_blank" rel="noreferrer">Resume</a>
          <img src="https://storage.cloud.google.com/all-cats/Screen%20Shot%202022-06-04%20at%2010.50.56%20PM.png" alt="resume-screenshot"/>
        </Offcanvas.Body>
      </Offcanvas> */}


        </div>
        <div className="bio-right">
          <img src="../Images/llp.jpeg" alt="selfie of me with glasses and purple hair"/>
        </div>
        <TechStack />
    </div>
  )
}

export default Bio