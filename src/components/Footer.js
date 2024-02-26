import React, { useRef } from "react";
import { useState } from "react";
import logo from "../assets/images/logo_final.png";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
// import "../css/Home.css";
import "../css/Footer.css";
import { firestore } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";

function Footer() {
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [isSubscribed, setSubscribed] = useState(false);
  const ref = collection(firestore, "Newsletter");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      email: emailRef.current.value,
    };
    try {
      addDoc(ref, data);
      setEmail("");
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setSubscribed(true);
    }, 1000);
  };

  return (
    <div className="footer">
      <Navbar
        collapseOnSelect
        expand="lg"
        className="footer-nav"
        // style={{ backgroundColor: "#fff !important", color: "#fff !important" }}
      >
        <Container className="foot-cont">
          <Navbar.Brand className="fot d-flex" href="/">
            <img src={logo} style={{ width: "70px" }} alt="Logo" />
            <h4>Prectlab</h4>
          </Navbar.Brand>

          <Nav className="text-end">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 group " controlId="formBasicEmail">
                <Form.Label className="em-label">
                  Subscribe to our newsletter
                </Form.Label>
                <div className="form-box d-flex">
                  <Form.Control
                    type="email"
                    className="email-control"
                    placeholder="Enter email"
                    ref={emailRef}
                  />
                  <button
                    type="submit"
                    className="btn subscribe-head"
                    style={{ marginLeft: "20px" }}
                  >
                    {isSubscribed ? "Subscribed!" : "Subscribe"}
                  </button>
                </div>
              </Form.Group>
            </Form>
          </Nav>
        </Container>
      </Navbar>
      <div className="attribution-block">
        <p>
          Images on the page are designed by{" "}
          <a href="https://www.freepik.com/free-photo/html-system-websites-collage-design_135164524.htm">
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
