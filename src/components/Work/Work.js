import { Row } from "antd";
import React from "react";
import { Col, Container } from "react-bootstrap";
import "./Work.scss";
import { datacontext } from "../myDataContext/myDataContext";

export const Work = () => {
  return (
    <Container className="work-container">
      <Row>
        <Col xs="12" md="12" lg="6">
          <img
            src="https://trydo.rainbowit.net/assets/images/about/about-4.png"
            width="100%"
            alt=""
          />
        </Col>
        <Col xs="12" md="12" lg="6" className="work-column">
          <h2 className="pt-4">Working Process</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            exercitationem impedit iure quia quo recusandae?
          </p>
          <ul>
            <datacontext.Consumer>
              {({ workListItems }) => {
                return (
                  <>
                    {workListItems.map((each, i) => 
                      <li key={i}>{each}</li>
                    )}
                  </>
                );
              }}
            </datacontext.Consumer>
          </ul>
          <button className="work-button">SEE HOW IT WORKS</button>
        </Col>
      </Row>
    </Container>
  );
};
