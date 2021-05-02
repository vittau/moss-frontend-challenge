import React from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import AlbumDetail from '../../components/AlbumDetail/AlbumDetail';
import ErrorToast from '../../components/ErrorToast/ErrorToast';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { useTopAlbums } from '../../hooks/useTopAlbums';
import './AlbumPage.scss';

const AlbumPage = (props: RouteComponentProps) => {
  const [feed, error] = useTopAlbums();
  const { index } = useParams<{ index: string }>();

  if (feed) {
    return <AlbumDetail data={feed[Number(index) - 1]} />;
  }

  if (error) {
    return <ErrorToast />;
  }

  return <LoadingIndicator />;
};
export default AlbumPage;
