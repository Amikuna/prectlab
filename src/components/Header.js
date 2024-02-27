import React, { useEffect } from "react";
import logo from "../assets/images/logo_final.png";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Col,
  Button,
} from "react-bootstrap";
import "../css/Home.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <div class="col1">
      <Navbar collapseOnSelect expand="lg" className="nav fixed-top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} style={{ width: "70px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="text-end">
              <Nav.Link href="/blog" style={{ color: "white !important" }}>
                Blog
              </Nav.Link>
              <Nav.Link
                href="/#pricing"
                style={{ color: "white !important", marginLeft: "20px" }}
              >
                Pricing
              </Nav.Link>

              <Nav.Link
                href="/#faq"
                eventKey={2}
                style={{ color: "white", marginLeft: "20px" }}
              >
                FAQ
              </Nav.Link>

              <Nav.Link
                eventKey={2}
                href="/contact"
                style={{ color: "white", marginLeft: "20px" }}
              >
                Contat Us
              </Nav.Link>

              <a href="/#pricing">
                <button
                  className="btn get-started"
                  style={{ marginLeft: "20px" }}
                >
                  Get Started
                </button>
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
