/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/AlbumDetail/AlbumDetail.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import AlbumDetail from './AlbumDetail';

describe('<AlbumDetail />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AlbumDetail />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
