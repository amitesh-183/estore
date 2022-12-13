import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/services.css";

const ServicesSlot = () => {
  return (
    <>
      <h2 className="text-center">Our Services</h2>
      {/* <Container> */}
      <Row className="rounded-5">
        <Col className="serv">
          <img
            src="https://i.postimg.cc/JzDr1KFT/tech-support.gif"
            className="suprt ms-auto me-auto"
            alt="24/7 customer support"
          />
          <p className="d-flex">24/7 Customer Support</p>
        </Col>
        <Col className="serv">
          <img
            src="https://i.postimg.cc/d1BvWf70/money-bag.gif"
            className="suprt ms-auto me-auto"
            alt="cash back"
          />
          <p>Easy Return policy</p>
        </Col>
        <Col className="serv border-0">
          <img
            src="https://i.postimg.cc/FHRf0jBc/truck.gif"
            className="suprt ms-auto me-auto"
            alt="24/7 customer support"
          />
          <p>Fast Delivery</p>
        </Col>
      </Row>
      {/* </Container> */}
    </>
  );
};

export default ServicesSlot;
