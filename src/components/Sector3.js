import React from "react";
import "../css/Home.css";
import { Col, Container, Row } from "react-bootstrap";
import sideImg from "../assets/images/html-system-websites-collage-design.png";

function Sector3() {
  return (
    <div className="col4">
      <Container fluid>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          <h1 className="head">How Does It Works?</h1>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100% !important", "margin-top": "50px" }}
        >
          <div className="sec3-row d-flex">
            <Col className="col-sec3" md={6}>
              <div className="row-sec3 d-flex justify-content-center">
                <div className="sec3-rows">
                  <h1 className="h1-sec3">#1 Discovery</h1>
                  <p>
                    Dive into the heart of your project. We begin by
                    understanding your goals, ideas, and aspirations. Our
                    experts work closely with you to shape a clear roadmap,
                    ensuring every detail aligns with your vision. Together, we
                    lay the foundation for your digital masterpiece.
                  </p>
                </div>
              </div>
              <div className="row-sec3 d-flex justify-content-center">
                <div className="sec3-rows">
                  <h1 className="h1-sec3">#2 Design</h1>
                  <p>
                    Immerse yourself in the creative journey. Our design wizards
                    bring your ideas to life, sketching elegant wireframes and
                    captivating designs tailored to your unique style. Watch as
                    your concept transforms into a visual masterpiece, setting
                    the stage for a seamless user experience.
                  </p>
                </div>
              </div>
              <div className="row-sec3 d-flex justify-content-center">
                <div className="sec3-rows">
                  <h1 className="h1-sec3">#3 Development</h1>
                  <p>
                    Witness the magic unfold as our development team breathes
                    life into your designs. Through cutting-edge technology and
                    expertise, we transform your concept into a fully
                    functional, dynamic product. Your dream takes shape, ready
                    to make its mark on the digital landscape.
                  </p>
                </div>
              </div>
              <div className="row-sec3 d-flex justify-content-center">
                <div className="sec3-rows">
                  <h1 className="h1-sec3">#4 Maintenance</h1>
                  <p>
                    Your digital creation deserves the best care. Our commitment
                    extends beyond launch day. We handle all aspects of
                    maintenance, from software updates to secure hosting. Your
                    app evolves with the ever-changing tech landscape, ensuring
                    it stands as a testament to innovation and reliability.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              md={5}
              className="col-sec3 col-image d-flex justify-content-center"
            >
              <img className="side-img" src={sideImg} />
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Sector3;
