import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.scss";
import { TiTick } from "react-icons/ti";
import { datacontext } from "../myDataContext/myDataContext";

export const About = () => {
  return (
    <Container className="about-container">
      <Row>
        <Col xs="12" md="12" lg="6" className="about-column">
          <h2>About</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
          <h3>Lorem ipsum dolor sit.</h3>
          <ul>
            <datacontext.Consumer>
              {({ list1 }) => {
                return (
                  <>
                    {list1.map((each, i) => (
                      <li key={i}>
                        <span>
                          <TiTick className="tick-icon" />
                        </span>
                        {each}
                      </li>
                    ))}
                  </>
                );
              }}
            </datacontext.Consumer>
          </ul>
          <h3>Lorem ipsum dolor sit.</h3>
          <ul>
            <datacontext.Consumer>
              {({ list2 }) => {
                return (
                  <>
                    {list2.map((each, i) => 
                      <li key={i}>
                        <span>
                          <TiTick className="tick-icon" />
                        </span>
                        {each}
                      </li>
                    )}
                  </>
                );
              }}
            </datacontext.Consumer>
          </ul>
        </Col>
        <Col xs="12" md="12" lg="6">
          <img
            src="https://trydo.rainbowit.net/assets/images/about/about-3.png"
            width="100%"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};
