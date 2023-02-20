import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Logos.scss";
import {datacontext} from '../myDataContext/myDataContext';

export const Logos = () => {
  return (
    <Container className="logo-container">
      <Row>
        <datacontext.Consumer>
          {({ logos }) => {
            return (
              <>
                {logos.map((each, i) => (
                  <Col key={i} xs="6" md="4" lg="4" className="p-5 ">
                    <img src={each} alt="" className="logo" width="100%" />
                  </Col>
                ))}
              </>
            );
          }}
        </datacontext.Consumer>
      </Row>
    </Container>
    // <div className="logo-container">
    //   <ul>
    //     {logos.map((each) => (
    //       <li>
    //         <img src={each} alt="" width="100%" />
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};
