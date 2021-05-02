import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle/PageTitle';
import './NavbarLayout.scss';

const NavbarLayout = ({ children }: IAlbumsProp) => (
  <>
    <div className="text-center">
      <Link to="/">
        <PageTitle />
      </Link>
    </div>
    <Container style={{ paddingTop: '1rem' }}>{children}</Container>
  </>
);

interface IAlbumsProp {
  children: JSX.Element;
}

export default NavbarLayout;
