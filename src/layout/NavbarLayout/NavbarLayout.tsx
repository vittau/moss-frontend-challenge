import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';
import './NavbarLayout.scss';

const NavbarLayout = ({ children }: IAlbumsProp) => (
  <div>
    <NavBar title="Top 100 Albums" />
    <Container className="d-flex justify-content-center" style={{ paddingTop: '1rem' }}>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  </div>
);

interface IAlbumsProp {
  children: JSX.Element;
}

export default NavbarLayout;
