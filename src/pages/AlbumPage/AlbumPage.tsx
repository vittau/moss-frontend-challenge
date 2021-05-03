import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorToast from '../../components/ErrorToast/ErrorToast';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import AlbumDetail from '../../features/AlbumDetail/AlbumDetail';
import { useTopAlbums } from '../../hooks/useTopAlbums';

const AlbumPage = () => {
  const [feed, error] = useTopAlbums();
  const { index } = useParams<{ index: string }>();

  if (error) {
    return <ErrorToast />;
  }

  if (feed) {
    return <AlbumDetail data={feed[Number(index) - 1]} />;
  }

  return <LoadingIndicator />;
};
export default AlbumPage;
