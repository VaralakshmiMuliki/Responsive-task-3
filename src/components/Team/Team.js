import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";
import "./Team.scss";
import "../../components/mediaQueries.scss";

export const Team = () => {
  const teamDeatails = [
    {
      name: "John Doe",
      image: "https://trydo.rainbowit.net/assets/images/team/team-01.jpg",
      role: "Sr Web developer",
    },
    {
      name: "Fatima Asrali",
      image: "	https://trydo.rainbowit.net/assets/images/team/team-02.jpg",
      role: "Frontend Engineer",
    },
    {
      name: "John Dou",
      image: "	https://trydo.rainbowit.net/assets/images/team/team-03.jpg",
      role: "Sr Graphic Designer",
    },
    {
      name: "John Due",
      image: "https://trydo.rainbowit.net/assets/images/team/team-06.jpg",
      role: "Web Developer",
    },
  ];
  return (
    <Container className="team-container">
      <div className="team-des">
        <h2>Managing Team</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <Row>
        {teamDeatails.map((each,i) => (
          <Col key={i} xs="12" md="6" lg="3" className="team-players-column">
            <img src={each.image} alt="" width="100%" />
            <h3>{each.name}</h3>
            <p>{each.role}</p>
            <div className="d-flex">
              <FaFacebookF className="social-icon"/>
              <AiOutlineInstagram   className="social-icon"/>
              <AiOutlineTwitter  className="social-icon" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
