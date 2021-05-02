import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ITunes } from '../model/iTunes';
import { fetchAlbums } from '../redux/ducks/itunes';
import { useAppSelector } from './useAppSelector';

export const useTopAlbums = (): [ITunes[] | null, boolean] => {
  const { feed, error } = useAppSelector((state) => state.iTunes);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!feed) {
      dispatch(fetchAlbums());
    }
  }, [feed, dispatch]);

  return [feed, error];
};
