import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import AlbumList from '../../components/AlbumList/AlbumList';
import ErrorToast from '../../components/ErrorToast/ErrorToast';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import { useTopAlbums } from '../../hooks/useTopAlbums';
import './HomePage.scss';

const HomePage = (props: RouteComponentProps) => {
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
