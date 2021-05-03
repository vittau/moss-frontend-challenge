import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

export default function LoadingIndicator() {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Col>
    </Row>
  );
}
