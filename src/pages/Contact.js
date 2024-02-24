import React, { useRef, useState } from "react";
import "../css/Contact.css";
import { Col, Accordion } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form } from "react-bootstrap";
import { firestore } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [isSent, setSent] = useState(false);
  const ref = collection(firestore, "Contact");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setSent(true);
    }, 1000);
  };
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-col">
        <div className="d-flex justify-content-center">
          <Col>
            <div className="title-block">
              <h1>Are You Interested in Prectlab?</h1>
              <p>
                If you already have an app idea and need experts to execute your
                vision feel free to contact us
              </p>
            </div>
          </Col>
        </div>
        <div className="contact-block">
          <Form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                className="inp-control"
                ref={nameRef}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                className="inp-control email"
                ref={emailRef}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                type="text"
                className="inp-control message"
                ref={messageRef}
                placeholder="About Your Project"
              />
            </Form.Group>

            <div className="button-container d-flex justify-content-center">
              <button className="btn send" type="submit">
                {isSent ? "Sent!" : "Send"}
              </button>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
