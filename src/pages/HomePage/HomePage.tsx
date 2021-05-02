import React from 'react';
import { Spinner } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import AlbumList from '../../components/AlbumList/AlbumList';
import { useTopAlbums } from '../../hooks/useTopAlbums';
import './HomePage.scss';

const HomePage = (props: RouteComponentProps) => {
  const feed = useTopAlbums();

  if (feed) {
    return <AlbumList data={feed} />;
  }
  return <Spinner animation="grow" />;
};
export default HomePage;
