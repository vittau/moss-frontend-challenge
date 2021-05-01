import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAlbums } from '../redux/ducks/itunes';
import { useAppSelector } from './useAppSelector';

export const useTopAlbums = () => {
  const { feed } = useAppSelector((state) => state.iTunes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!feed) {
      dispatch(fetchAlbums());
    }
  }, [feed, dispatch]);

  return feed;
};
