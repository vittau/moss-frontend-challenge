import React from 'react';
import { Spinner } from 'react-bootstrap';
import { RouteComponentProps, useParams } from 'react-router-dom';
import AlbumDetail from '../../components/AlbumDetail/AlbumDetail';
import { useTopAlbums } from '../../hooks/useTopAlbums';
import './AlbumPage.scss';

const AlbumPage = (props: RouteComponentProps) => {
  const feed = useTopAlbums();
  const { index } = useParams<{ index: string }>();

  if (feed) {
    return <AlbumDetail data={feed[Number(index) - 1]} />;
  }
  return <Spinner animation="grow" />;
};
export default AlbumPage;
