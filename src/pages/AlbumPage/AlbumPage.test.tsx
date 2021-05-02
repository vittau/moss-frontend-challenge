import { shallow } from 'enzyme';
import React from 'react';
import * as useParams from 'react-router-dom';
import * as useTopAlbums from '../../hooks/useTopAlbums';
import { ITunes } from '../../model/iTunes';
import AlbumPage from './AlbumPage';

/* Workaround for the fact that babel does not generate setters for re-exported properties:
https://stackoverflow.com/a/53307822 */
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/AlbumPage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
};

const shallowAlbumPage = (useTopAlbumsMockImpl: () => [ITunes[] | null, boolean], currentIndex: number) => {
  jest.spyOn(useTopAlbums, 'useTopAlbums').mockImplementation(useTopAlbumsMockImpl);
  jest.spyOn(useParams, 'useParams').mockImplementation(() => ({ index: currentIndex.toString() }));
  return shallow(<AlbumPage {...routeComponentPropsMock} />);
};

describe('<AlbumPage />', () => {
  test('It should mount', () => {
    const component = shallowAlbumPage(() => [[], false], 1);
    expect(component.length).toBe(1);
  });
});
