import React from "react";
import "../css/Home.css";
import { Col, Accordion } from "react-bootstrap";
import money from "../assets/images/money-svgrepo-com.png";
import time from "../assets/images/time-cronometer-svgrepo-com.png";
import hr from "../assets/images/human-resources-search-svgrepo-com.png";

function Sector2() {
  return (
    <div className="col3">
      <div className="d-flex justify-content-center">
        <Col>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "10px" }}
          >
            <h1 className="head">Why Do We Exist?</h1>
          </div>
          <div className="title-block">
            <h1>To Make Software Development Painless</h1>
            <p>
              Bring your digital visions to life swiftly and cost-effectively,
              eliminating the need for extensive developer hiring and
              traditional, time-consuming methods.
            </p>
          </div>
          <div className="sec2-head-block">
            <Col>
              <div className="col-block">
                <img src={money} alt="money" style={{ width: "70px" }} />
                <h2>Save Resources</h2>
                <p>
                  Code services redefine software development by streamlining
                  processes, reducing the need for extensive developer
                  resources, and cutting down on traditional development costs.
                </p>
              </div>
            </Col>
            <Col>
              <div className="col-block">
                <img src={time} alt="money" style={{ width: "70px" }} />
                <h2>Quicker Development</h2>
                <p>
                  Rapid development cycles allowing you to bring your ideas to
                  life at lightning speed. By bypassing the complexities of
                  traditional development methods, we empower you to achieve
                  your digital objectives faster
                </p>
              </div>
            </Col>
            <Col>
              <div className="col-block">
                <img src={hr} alt="money" style={{ width: "70px" }} />
                <h2>Less Management</h2>
                <p>
                  Say goodbye to the pains of recruiting and contoling
                  professionals. We eliminate the need for hiring and management
                  headaches, giving you with expert services without the
                  associated burdens. Focus on your vision – let us handle the
                  rest.
                </p>
              </div>
            </Col>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default Sector2;
