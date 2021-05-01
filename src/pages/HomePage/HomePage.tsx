import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTopAlbums } from '../../hooks/useTopAlbums';
import Albums from '../../layout/Albums/Albums';
import './HomePage.scss';

const HomePage = (props: RouteComponentProps) => {
  const feed = useTopAlbums();

  if (feed) {
    return <Albums data={feed} />;
  }
  return null;
};
export default HomePage;
