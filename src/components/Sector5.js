import React from "react";
import "../css/Home.css";
import { Col, Accordion } from "react-bootstrap";

function Sector5() {
  return (
    <div className="col6" id="faq">
      <div className="d-flex justify-content-center">
        <Col>
          <div
            style={{ width: "100% !important" }}
            className="d-flex justify-content-center"
          >
            <div className="sec6-head-block">
              <h1 className="head">FAQ</h1>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Why No Code?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Traditional coding can be time-consuming and complex. No
                      code tools allow us to build, test, and deploy
                      applications rapidly, reducing the time it takes to turn
                      ideas into reality. This speed to market is crucial in
                      today's dynamic business environment.{" "}
                    </p>
                    <p>
                      No code solutions significantly reduce development costs
                      compared to traditional custom coding. By leveraging no
                      code platforms, we can deliver high-quality solutions
                      without the need for extensive coding expertise,
                      ultimately saving you money.
                    </p>
                    <p>
                      No code platforms provide a flexible environment that
                      allows for quick adjustments and adaptations to changing
                      business needs. This agility is crucial in responding to
                      market shifts and staying ahead of the competition.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What services does your agency provide?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We offer a range of services, including web and mobile
                      applications, saas products, custom solutions, AI
                      integrations and more. Our goal is to provide
                      comprehensive solutions to meet your needs.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Who is this Service For?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      It is for anyone who needs to build a software. Our
                      services are tailored to meet the specific needs of a
                      businesses of any size seeking cost-effective, efficient,
                      and scalable digital solutions without the need for
                      extensive technical expertise. We understand the
                      challenges faced by entrepreneurs and startups in their
                      early stages. Our no code approach enables them to bring
                      their ideas to life quickly and affordably, allowing for
                      rapid prototyping and iteration.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How Long Does it take to Finish a Project?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The development time is highly dependent on the complexity
                      of the project. Each project undergoes a planning phase
                      where we collaborate with you to define specific goals,
                      features, and functionalities. During this phase, we break
                      down the project into smaller tasks, creating a roadmap
                      for implementation. If your project requires a high level
                      of customization or unique features, additional time may
                      be needed to ensure that every aspect aligns perfectly
                      with your business needs. Moreover, the speed of the
                      project can be influenced by the level of collaboration
                      with you. Timely feedback, clear communication, and prompt
                      decision-making play a crucial role in expediting the
                      development process.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What happens if I'm not satisfied with the results?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our goal is your satisfaction. If you're not happy with
                      the results, we'll work closely with you to understand the
                      concerns and make necessary adjustments until you're
                      delighted with the outcome.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What happens if I don't need development work for a certain
                    month?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      If you don't need a service for a certain month, you can
                      always pause a subscription and resume when you need it
                      again.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Do you have a refund policy?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Due to the high quality nature of the work, there will be
                      no refunds issued once a Task is active and has started.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div
            className="d-flex justify-content-center sec2-row"
            style={{ width: "100% !important" }}
          ></div>
        </Col>
      </div>
    </div>
  );
}

export default Sector5;
