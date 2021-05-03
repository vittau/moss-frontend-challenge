import React from 'react';
import ErrorToast from '../../components/ErrorToast/ErrorToast';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import AlbumList from '../../features/AlbumList/AlbumList';
import { useTopAlbums } from '../../hooks/useTopAlbums';

const HomePage = () => {
  const [feed, error] = useTopAlbums();

  if (error) {
    return <ErrorToast />;
  }

  if (feed) {
    return <AlbumList data={feed} />;
  }

  return <LoadingIndicator />;
};
export default HomePage;
