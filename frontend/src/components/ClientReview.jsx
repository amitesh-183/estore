import React from "react";
import Rating from "../components/Rating";
import { Card, Col, Row } from "react-bootstrap";

const ClientReview = () => {
  return (
    <>
      <h2 className="text-center">Our Client Reviews</h2>
      <Row className="m-5">
        <Col>
          <Card style={{ width: "18rem" }} className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Rihan Khan</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */}
              <Card.Text>
                Wow! amazing product, being using for a month no problem yet.
              </Card.Text>
              <Rating
                value="5"
                color="#f8e825"
                className="text-center d-flex justify-content-center"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Iqra</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */}
              <Card.Text>
                Wow! amazing product, being using for a month no problem yet.
              </Card.Text>
              <Rating value="5" color="#f8e825" className="ms-5" />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }} className="rounded">
            <Card.Body>
              <Card.Title className="text-center">Ritvesh Thakur</Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */}
              <Card.Text>
                Wow! amazing product, being using for a month no problem yet.
              </Card.Text>
              <Rating
                value="5"
                color="#f8e825"
                className="text-center d-flex justify-content-center"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ClientReview;
