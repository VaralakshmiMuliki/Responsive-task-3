import React from "react";
import "./Stratagy.scss";
// import { FaChromecast } from "react-icons/fa";
// import { FiLayers } from "react-icons/fi";
// import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { Col, Container, Row } from "react-bootstrap";
import { Card } from "antd";
import { datacontext } from "../myDataContext/myDataContext";
export const Stratagy = () => {
  return (
    <Container className="stratagey-container">
      <Row className="stratagy-row">
        <datacontext.Consumer>
          {({ stratageyDetails }) => {
            return (
              <>
                {stratageyDetails.map((each, i) => 
                  <Col
                    key={i}
                    xs="12"
                    md="6"
                    lg="4"
                    className="stratagy-column"
                  >
                    <Card className="straragy-card">
                      {each.icon}
                      <h6>{each.title}</h6>
                      <p>
                        I throw myself down among the tall grass by the stream
                        as I lie close to the earth.
                      </p>
                    </Card>
                  </Col>
                )}
              </>
            );
          }}
        </datacontext.Consumer>
      </Row>
    </Container>
  );
};
