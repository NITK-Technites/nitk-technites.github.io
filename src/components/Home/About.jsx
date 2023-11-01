import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  WHO <span className="yellow"> ARE </span> WE ?
                </h1>
                <p className="home-about-body">
                Technites is a sci-tech innovation event, of the annual Tech fest of NITK Surathkal, <span className="yellow">ENGINEER.</span>
                <br />
                <br />
                Started in <span className="yellow">2005</span> as an amalgamation of many technical fests held in NITK Surathkal by its various student clubs, Engineer has grown in leaps and bounds over the years. It is held over 4 days in the second half of the month of October and has consistently attracted participants from all over India. A Penrose Triangle is used as its logo with the tagline <span className="yellow">'Think.Create.Engineer'</span>.
                <br />
                <br />
                Many technical and entrepreneurship events are held during the fest, including quizzes, Coding marathons, RC car racing and the like.
                  <br />
                  <br />
                  These are broadly classified into various Branch Events. Apart from this, Workshops in a variety of fields are also held. To highlight the social responsibility of Engineers, social/environmental awareness initiatives are undertaken under the banner of SCE (Socially Conscious Engineering). 
                  <br />

                  <span className="yellow">Technites is another major attraction, showcasing the beauty of technology after dark</span>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND US ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/NITK-Technites"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/company/technites-nitk/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://instagram.com/technitesnitk?igshid=xfia546mg3v6"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.facebook.com/magiciansoftheafterdark/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="facebook"
                    >
                      <AiFillFacebook />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About