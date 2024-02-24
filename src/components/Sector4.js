import React from "react";
import "../css/Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";

function Sector4() {
  return (
    <div className="col4" id="pricing">
      <Container fluid>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          <h1 className="head">PRICING</h1>
        </div>
        <div
          className="d-flex justify-content-center"
          style={{ width: "100% !important", "margin-top": "50px" }}
        >
          <div className="sec4-row d-flex">
            <Col className="col-sec3 left-card">
              <div className="pricing-card">
                <div className="pricing-card-head">
                  <h2 className="pricing-card-head-text">Standard</h2>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <h1>$5,999</h1>
                  <h3 style={{ marginTop: "10px" }}>/mo</h3>
                </div>
                <a href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-32J63987KM620643UMXFYW6I">
                  <button
                    className="btn subscribe"
                    style={{ marginTop: "10px" }}
                  >
                    Subscribe Now
                  </button>
                </a>
                <a href="/contact">
                  <button className="btn contact">Contact Us</button>
                </a>
                <br></br>
                <br></br>
                <div className="line"></div>
                <br></br>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>1 Active Task at a time</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Dedicated Project Manager</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Dedicated UI/UX Designer</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>1 Dedicated Developer</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5> Regular Meetings</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Unlimited Task request</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Unlimited Revisions</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-sec3 right-card">
              <div className="pricing-card">
                <div className="pricing-card-head">
                  <h2 className="pricing-card-head-text">Premium</h2>
                </div>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ marginTop: "10px" }}
                >
                  <h1>$9,999</h1>
                  <h3 style={{ marginTop: "10px" }}>/mo</h3>
                </div>
                <a href="https://www.paypal.com/webapps/billing/plans/subscribe?plan_id=P-0UW17833WA1213846MXFZNDI">
                  <button
                    className="btn subscribe"
                    style={{ marginTop: "10px" }}
                  >
                    Subscribe Now
                  </button>
                </a>
                <a href="/contact">
                  <button className="btn contact">Contact Us</button>
                </a>
                <br></br>
                <br></br>
                <div className="line"></div>
                <br></br>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>2 Active Task at a time</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Dedicated Project Manager</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Dedicated UI/UX Designer</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>2 Dedicated Developer</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5> Regular Meetings</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Unlimited Task request</h5>
                  </div>
                </div>
                <div className="price-row">
                  <FaCheck className="check" />
                  <div className="pricing-list-item">
                    <h5>Unlimited Revisions</h5>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Sector4;
