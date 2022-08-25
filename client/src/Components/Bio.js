import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Bio() {
  const [showMore, setShowMore] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleCloseMore = () => setShowMore(false);
  const handleShowMore = () => setShowMore(true);

  const handleCloseResume = () => setShowResume(false);
  const handleShowResume = () => setShowResume(true);

  return (
    <div id="bio">
          <ButtonGroup className="bio-buttons-group"
          // aria-label="Basic example"
          >
          <button className="bio-buttons" onClick={handleShowResume}>
           My Resume
          </button>
            <Offcanvas show={showResume} onHide={handleCloseResume}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Lindsey L Pregent</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <a
                  href="https://www.linkedin.com/in/lindsey-lee-pregent1613/overlay/1635490062046/single-media-viewer/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Full Resume{" "}
                </a>{" "}
                <br></br>
                <h4>Full Stack Software Engineer</h4>
                <p>
                  Experience in Ruby and JavaScript-based programming languages
                  with a background in client services. Confident Bootcamp grad
                  who knows how to work well under pressure and learn quickly.
                  Flexible and agile with a zest for problem-solving and helping
                  people. Understands the client's perspective and excitedly
                  translates that into a positive experience. Proven ability to
                  lead, collaborate and innovate. Reliable, efficient, and a great
                  multi-tasker. Passion for social justice, equity, animal rescue,
                  and music. Motivated to continue advancing new skillset in the
                  wide world of tech!
                </p>
                <h4>Technical Skills</h4>
                <p>
                  Rails, React, Javascript, Ruby, SQLite, CSS, HTML, Bootstrap,
                  PostgresSQL, SQLite, Postman, Github, Heroku
                </p>
                <h4>Experience</h4>
                <strong>Executive Assistant @ Lawyers For Children</strong>
                <br></br>
                <em>New York, New York 08/2012 - 12/2021</em>
                <li>
                  Maintained a positive client experience while assistig the
                  Director of Administration.
                </li>
                <li>
                  Data entry and upkeep via an electronic Case Management System.
                </li>
                <li>
                  Onboarded new Administrative staff and trained new staff in Case
                  Management System.
                </li>
                <li>
                  Answered phones, greeted clients and assisted staff in every day
                  needs.
                </li>
                <br></br>
                <strong>Barista @ Starbucks</strong>
                <br></br>
                <em>New York, New York 03/2010 - 10/2012</em>
                <li>
                  Provided excellent customer service, staff training, and sales
                  in a fast-paced environment
                </li>
                <li>Trained as a Shift Supervisor.</li>
                <br></br>
                <strong>Hostess/Bartender @ Bridgeview Diner</strong>
                <br></br>
                <em>Brooklyn, New York 08/2008 - 01/2010</em>
                <li>
                  Greeted and served clients while accepting payments, bussing
                  tables, and crafting cocktails.
                </li>
                <br></br>
                <h4>Technical Projects</h4>
                <strong>Community Cat Catalog</strong>
                <li>
                  Utilized React-Map-GL and Ruby-Geocoder to plot dynamic markers
                  on a map.
                </li>
                <li>
                  Worked with Ruby-on-Rails and Postgres to create a comprehensive
                  Cat database.
                </li>
                <li>
                  Used Bcrypt to allow users to log in and track their own cats.
                </li>
                <strong>Another Treasure</strong>
                <li>
                  Utilized React Map-GL to display markers on a map interface.
                </li>
                <li>
                  Worked with Email.JS for direct emails from users to
                  organizations.
                </li>
                <li>
                  Created a form for users to add items to the database and edit
                  those items.
                </li>
                <strong>Tarot Reader</strong>
                <li>Developed an extensive JSON API with tarot card details.</li>
                <li>
                  Implemented RESTful routing in order to display unique pages for
                  each tarot card.
                </li>
                <li>
                  Created several interactive features through a combination of
                  CSS and JS.
                </li>
                <br></br>
                <h4>Education</h4>
                <strong>Flatiron School</strong> <br></br>
                <em>Remote 01/2022 - 04/2022</em>
                <p>
                  Certificate in Software Engineering. Full Stack Web Development
                </p>
                <strong>Brooklyn Colege</strong> <br></br>
                <em>Brooklyn, New York 2007</em>
                <p>Coursework Completed towards Degree in Liberal Arts</p>
                <strong>Curtis High School</strong> <br></br>
                <em>Staten Island, New York. Graduated: 06/2007</em>
                <p>National Honor Society. Gay/Straight Alliance</p>
              </Offcanvas.Body>
            </Offcanvas>

          <button className="bio-buttons" onClick={handleShowMore}>
           About Me!
          </button>

          <Offcanvas show={showMore} onHide={handleCloseMore} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Things I love. . .</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Container>
                <Row>
                  <span>
                    {" "}
                    <h4>Things I love</h4>
                    Hello Kitty. Halloween. Punk Music. Anime.
                  </span>
                </Row>
                <br></br>
                <Col>
                  <div clasName="bio-more-pics">
                    <img
                      src="https://storage.cloud.google.com/all-cats/Tech-Stack/hkBio.jpg"
                      height="150px"
                      width="150px"
                    />
                    <img
                      src="https://storage.cloud.google.com/all-cats/Tech-Stack/halloweenBio.jpg"
                      height="150px"
                      width="150px"
                    />
                    <img
                      src="https://storage.cloud.google.com/all-cats/Tech-Stack/Screen%20Shot%202022-07-01%20at%202.03.54%20PM.png"
                      height="150px"
                      width="150px"
                    />
                    <img
                      src="https://storage.cloud.google.com/all-cats/Tech-Stack/Screen%20Shot%202022-07-01%20at%202.11.20%20PM.png"
                      height="150px"
                      width="150px"
                    />
                  </div>
                </Col>
                <Row>
                  <h4>Cat Rescue!</h4>
                </Row>
              </Container>
            </Offcanvas.Body>
          </Offcanvas>
          </ButtonGroup>
    </div>
  );
}

export default Bio;
