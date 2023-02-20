import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Pricing.scss";
import "../../components/mediaQueries.scss";
import { TiTick } from "react-icons/ti";
import { Card } from "antd";

export const Pricing = () => {
  const priceDetails = ["Free", "Business", "Advanced"];
  const features = [
    " 5 PPC Campaigns",
    "Digital Marketing",
    "Marketing Agency",
    "Seo Friendly",
    "UI/UX Designs",
  ];
  return (
    <Container className="pricing-container">
      <div className="pricing-title">
        <h2>Pricing Plan</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <Row>
        {priceDetails.map((each,i) => (
          <Col key={i} xs="12" md="6" lg="4" className='bb'>
            <Card
              className={
                each === "Business"
                  ? "price-advanced-column mb-4"
                  : "price-normal-column mb-4"
              }
            >
              <h3>{each}</h3>
              <h1>29</h1>
              <p>USD For Month</p>
              <hr />
              {features.map((each,i) => (
                <ul key={i}>
                  <li>
                    <span>
                      <TiTick className="tick-icon" />
                    </span>
                    {each}
                  </li>
                </ul>
              ))}
              <button
                className={
                  each === "Business" ? "advanced-button" : "normal-button"
                }
              >
                Purchase Now
              </button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
