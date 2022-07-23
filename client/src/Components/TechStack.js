import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function TechStack() {
  // const [tech, setTech] = useState();

  // useEffect(() => {
  //   fetch("/tech_stacks")
  //     .then((r) => r.json())
  //     .then(setTech);
  // }, []);

  return (
    <div id="tech">
      <div className="stack-grid">
        {/* <h4> My Tech Stack </h4> */}
        <Container className="tech-stack-icons">
          <Row md="auto" className="tech-row">
            <Col>
              <OverlayTrigger
                placement="top"
                // padding="1px"
                overlay={<Popover>React</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/react.svg"
                  alt="react-icon"
                  style={{ backgroundColor: "#61DAFB" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={<Popover>Ruby on Rails</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/rubyonrails.svg"
                  alt="ruby-on-rails-icon"
                  style={{ backgroundColor: "#CC0000" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger
                placement="top"
                overlay={<Popover>JavaScript</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/javascript.svg"
                  alt="react-icon"
                  style={{ backgroundColor: "#F7DF1E" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger placement="bottom" overlay={<Popover>Ruby</Popover>}>
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/ruby.svg"
                  alt="ruby-icon"
                  style={{ backgroundColor: "#CC342D" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger
                placement="top"
                overlay={<Popover>HTML4</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/html5.svg"
                  alt="html-5-icon"
                  style={{ backgroundColor: "#E34F26" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={<Popover>CSS</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/css3.svg"
                  alt="css-3-icon"
                  style={{ backgroundColor: "#1572B6" }}
                />
              </OverlayTrigger>
            </Col>
          {/* </Row>

          <Row md="auto" className="tech-row"> */}
            <Col>
              <OverlayTrigger
                placement="top"
                overlay={<Popover>Postman</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/postman.svg"
                  alt="postman-icon"
                  style={{ backgroundColor: "#FF6C37" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={<Popover>PostgresSQL</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/postgresql.svg"
                  alt="postgresSQL-icon"
                  style={{ backgroundColor: "#4169E1" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger
                placement="top"
                overlay={<Popover>Github</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/github.svg"
                  alt="github-icon"
                  style={{ backgroundColor: "#5a5757" }}
                />
              </OverlayTrigger>
            </Col>
            
            <Col>
              <OverlayTrigger
                placement="bottom"
                overlay={<Popover>Mapbox</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/mapbox.svg"
                  alt="mapbox-icon"
                  style={{ backgroundColor: "white" }}
                />
              </OverlayTrigger>
            </Col>

            <Col>
              <OverlayTrigger
                placement="top"
                overlay={<Popover>Bootstrap</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/bootstrap.svg"
                  alt="bootstrap-icon"
                  style={{ backgroundColor: "#7952B3" }}
                />
              </OverlayTrigger>
            </Col>

            <Col className="tech-learning">
              <OverlayTrigger
                placement="bottom"
                overlay={<Popover>Currently Studying: Python</Popover>}
              >
                <img
                  src="https://storage.cloud.google.com/all-cats/Tech/python.svg"
                  alt="python-icon"
                  style={{ backgroundColor: "#3776AB" }}
                />
              </OverlayTrigger>
            </Col>

          </Row>
        </Container>
      </div>
        <div className="mobile-tech-stack">
          <li>React</li>
          <li>Ruby</li>
          <li>Rails</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </div>
    </div>
  );
}

export default TechStack;
