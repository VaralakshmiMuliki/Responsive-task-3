import { Row } from "antd";
import React from "react";
import { Col, Container } from "react-bootstrap";
import "./Services.scss";
import "../../components/mediaQueries.scss";

export const Services = () => {
  const serviceData = [
    {
      image:
        "https://trydo.rainbowit.net/assets/images/featured/corporate-01.jpg",
      title: "Thinking Development",
      des: "",
    },
    {
      image:
        "https://trydo.rainbowit.net/assets/images/featured/corporate-02.jpg",
      title: "Business Consulting",
      des: "",
    },
    {
      image:
        "	https://trydo.rainbowit.net/assets/images/featured/corporate-03.jpg",
      title: "Business Development",
      des: "",
    },
  ];
  return (
    <Container className="service-container">
      <Row>
        <Col xs="12" md="12" lg="3" className="p-3 service-matter-column">
          <h1>Services</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but.
          </p>
          <h6>Request Custom Services</h6>
         
        </Col>

        {serviceData.map((each,i) => (
          <Col key={i} xs="12" md="4" lg="3" className="service-column">
            <img src={each.image} alt="" className="service-img" width='100%' />
            <h4>{each.title}</h4>
            <p>I throw myself down among the tall grass by the stream</p>
            <h6>Read More</h6>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
