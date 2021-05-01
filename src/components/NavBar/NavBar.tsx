import React from 'react';
import { Navbar } from 'react-bootstrap';
import './NavBar.scss';

export default function NavBar({ title }: INavBarProp) {
  return (
    <>
      <Navbar expand bg="dark" variant="dark">
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </>
  );
}

interface INavBarProp {
  title: string;
}
