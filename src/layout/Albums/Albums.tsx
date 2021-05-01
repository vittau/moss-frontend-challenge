import React from 'react';
import { Container } from 'react-bootstrap';
import AlbumList from '../../components/AlbumList/AlbumList';
import NavBar from '../../components/NavBar/NavBar';
import { ITunes } from '../../model/iTunes';
import './Albums.scss';

const Albums = ({ data }: IAlbumsProp) => (
  <>
    <NavBar title="Top 100" />
    <Container style={{ paddingTop: '1rem' }}>
      <AlbumList data={data} />
    </Container>
  </>
);

interface IAlbumsProp {
  data: ITunes[];
}

export default Albums;
