import React from 'react';
import { Col, Row, Toast } from 'react-bootstrap';

export default function ErrorToast() {
  return (
    <Row>
      <Col className="d-flex justify-content-center">
        <Toast>
          <Toast.Header closeButton={false}>
            <strong className="mr-auto">Something is not right...</strong>
          </Toast.Header>
          <Toast.Body>
            Oh no, there was an error loading the albums.
            <br />
            Please try again later.
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
