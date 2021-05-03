import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import PageTitle from '../../components/PageTitle/PageTitle';
import './MainLayout.scss';

const MainLayout = ({ children }: IAlbumsProp) => (
  <>
    <div className="text-center">
      <PageTitle />
    </div>
    <Container style={{ paddingTop: '1rem' }}>{children}</Container>
  </>
);

interface IAlbumsProp {
  children: ReactNode;
}

export default MainLayout;
