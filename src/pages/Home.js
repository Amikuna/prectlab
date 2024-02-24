import React, { useEffect } from "react";
import logo from "../assets/images/logo_final.png";
import Sector2 from "../components/Sector2";
import Sector3 from "../components/Sector3";
import Sector4 from "../components/Sector4";
import Sector5 from "../components/Sector5";
import Footer from "../components/Footer";
import { Col } from "react-bootstrap";
import "../css/Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Home() {
  const location = useLocation();
  useEffect(() => {
    // Wait for 100 milliseconds before scrolling
    setTimeout(() => {
      if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 100);
  }, [location]);

  return (
    <div className="home">
      <Header />
      <div className="col2">
        <div className="d-flex justify-content-center">
          <Col>
            <div className="title-block">
              <h1>Create Inovative Software Solutions</h1>
              <p>
                Transforming Ideas into Seamless Digital Experiences. Elevate
                your brand with our expert mobile and web app development
                services. From concept to deployment, we bring your vision to
                life with cutting-edge technology and unparalleled creativity.
              </p>
              <a href="/#pricing">
                <button className="btn get-started large-btn">
                  Get Started
                </button>
              </a>
            </div>
          </Col>
        </div>
      </div>
      <Sector2 />
      <Sector3 />
      <Sector4 />
      <Sector5 />
      <Footer />
    </div>
  );
}

export default Home;
