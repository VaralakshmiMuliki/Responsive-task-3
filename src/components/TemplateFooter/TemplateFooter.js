import React from "react";
import "./TemplateFooter.scss";
import "../../components/mediaQueries.scss";
import { Col, Container, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";

export const TemplateFooter = () => {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col xs="12" md="6" lg="4">
          <img
            src="https://trydo.rainbowit.net/assets/images/logo/logo.png"
            alt=""
            width="100%"
          />
        </Col>
        <Col
          xs="12"
          md="6"
          lg="4"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="d-flex">
            <GrFacebookOption className="footer-social-icon" />
            <AiOutlineInstagram className="footer-social-icon" />
            <AiOutlineTwitter className="footer-social-icon" />
            <ImLinkedin2 className="footer-social-icon" />
          </div>
        </Col>
        <Col
          xs="12"
          md="6"
          lg="4"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <p>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};
