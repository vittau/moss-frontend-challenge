/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/AlbumPage/AlbumPage.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import AlbumPage from './AlbumPage';

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
describe('<AlbumPage />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AlbumPage {...routeComponentPropsMock} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
