import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { Document, Page } from 'react-pdf';
import resume from './resume.pdf';

function Bio() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="bio">
      <div className="bio-padding"></div>
      <h1>About Me</h1>
        <div className="bio-left">
          <p>Hi! I'm Lindsey and I am excited to be entering the wide world of coding. After working in customer service and administration for 15 years, I decided on a change. I attended Flatiron School from Jan-April 2022 where I learned HMTL, CSS, JavaScript, React, Ruby and Rails. I'm now a Full Stack Software Engineer! I also work in the cat rescue world as a foster and a TNR (trap-neuter-return) certified trapper. I bring my passion for anti-racism, social justice and cat rescue to everything I do.  
          </p>
          <div className="resume-offcanvas">
            <Button variant="dark" onClick={handleShow}>
            <a href="https://www.linkedin.com/in/lindsey-lee-pregent1613/overlay/1635490062046/single-media-viewer/" target="_blank" rel="noreferrer">Resume</a>
          </Button>

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
        </div>
        <div className="bio-right">
          <img src="../Images/llp.jpeg" alt="selfie of girl with glasses and purple hair"/>
        </div>
    </div>
  )
}

export default Bio