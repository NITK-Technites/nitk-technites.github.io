import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import mini_rc_buggy from "../assets/projects/mini-rc-buggy_1.png";
import led_wall from "../assets/projects/led_wall_1.png";
import cnc_pen_plotter from "../assets/projects/pen_plotter.jfif";
import laser_tag from "../assets/projects/laser_tag.jfif";
import ddr from "../assets/projects/ddr.jfif";
import laser_turret from "../assets/projects/laser_turret.png";
import robotic_arm from "../assets/projects/robotic_arm.jfif";
import farc from "../assets/projects/farc.jfif";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our <strong className="yellow">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mini_rc_buggy}
              isBlog={false}
              title="Mini RC Buggy"
              description="The Wi-Fi Controlled RC Car project aims to convert a traditional RC car into a Wi-Fi-controlled vehicle. By integrating Wi-Fi capabilities, the user can control the car remotely from a smartphone or computer, allowing for greater range and versatility in maneuvering the vehicle. This project combines hardware modifications, software development, and networking to achieve the desired functionality."
              ghLink="https://github.com/NITK-Technites/MiniVehicle"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={led_wall}
              isBlog={false}
              title="LED Wall"
              description="A sound visualizer LED wall is a dynamic and immersive display that responds to audio input by generating visual effects or patterns of light in sync with the music or sound being played. These LED walls combine LED technology with audio processing to create stunning visual experiences that are often used in entertainment, concerts, events, and artistic installations."
              ghLink="https://github.com/NITK-Technites/LED_Wall"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cnc_pen_plotter}
              isBlog={false}
              title="CNC Pen Plotter"
              description="CNC (Computer Numerical Control) refers to a computer-controlled system used for the precise and automated control of machinery, such as mills, lathes, routers, and 3D printers. In the context of a 'CNC Plotter' it typically refers to a specific type of CNC machine designed for drawing or plotting on a two-dimensional surface, often paper or other flat materials."
              ghLink="https://github.com/NITK-Technites/CNC-Pen-Plotter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laser_tag}
              isBlog={false}
              title="Laser Tag"
              description="Laser tag is an interactive, team-based or individual recreational shooting game where players use infrared-emitting light guns or devices to tag or 'shoot' opponents. The game typically takes place in a specially designed arena with various obstacles and hiding spots."
              ghLink="https://github.com/NITK-Technites/Blitzkreig"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ddr}
              isBlog={false}
              title="Dance Dance Revolution"
              description="Dance Dance Revolution (DDR) is a rhythm and dance video game that challenges players to match dance steps to the beat of various songs. It is not only a fun and entertaining game but also a platform for exercise and competitive play. DDR has become a cultural phenomenon and remains a popular choice for gamers and those looking to combine entertainment with physical activity."
              ghLink="https://github.com/NITK-Technites/DDR"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laser_turret}
              isBlog={false}
              title="Laser Turret"
              description="A flash detector using Arduino utilizes light-sensitive components like phototransistors or LDRs to detect sudden light intensity changes, such as camera flashes. It connects to an Arduino, which analyzes sensor output to recognize flash events exceeding a set threshold. This system is valuable for synchronized photography, security systems, or event monitoring requiring flash detection."
              ghLink="https://github.com/NITK-Technites/Laser-Turret"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotic_arm}
              isBlog={false}
              title="Robotic Arm"
              description="A robotic arm designed to pick up chess pieces, often referred to as 'chess coins' is a specific application of robotic technology. This robotic arm is intended to autonomously or remotely move chess pieces on a chessboard. "
              ghLink="https://github.com/NITK-Technites/Robotic-Arm"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farc}
              isBlog={false}
              title="Planes and Drones"
              description="The construction of drones may vary significantly from traditional airplanes due to their smaller size, different missions, and often the use of remote control or autonomous technology. Additionally, modern aircraft development may also involve 3D printing and advanced materials to improve performance and reduce weight."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects