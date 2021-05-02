import { shallow } from 'enzyme';
import React from 'react';
import * as useTopAlbums from '../../hooks/useTopAlbums';
import { ITunes } from '../../model/iTunes';
import HomePage from './HomePage';

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/HomePage',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
};

const shallowHomePage = (useTopAlbumsMockImpl: () => [ITunes[] | null, boolean]) => {
  jest.spyOn(useTopAlbums, 'useTopAlbums').mockImplementation(useTopAlbumsMockImpl);
  return shallow(<HomePage {...routeComponentPropsMock} />);
};

describe('<HomePage />', () => {
  test('It should mount', () => {
    const component = shallowHomePage(() => [[], false]);
    expect(component.length).toBe(1);
  });

  test('It should have the album list when the feed is present', () => {
    const component = shallowHomePage(() => [[], false]);
    expect(component.find('AlbumList').length).toBe(1);
  });

  test("It should have the error toast when it's in an error state", () => {
    const component = shallowHomePage(() => [[], true]);
    expect(component.find('ErrorToast').length).toBe(1);
  });

  test('It should have the loading indicator while it is loading content', () => {
    const component = shallowHomePage(() => [null, false]);
    expect(component.find('LoadingIndicator').length).toBe(1);
  });
});
