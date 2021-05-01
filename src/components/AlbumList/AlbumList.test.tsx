/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/AlbumList/AlbumList.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import AlbumList from './AlbumList';

describe('<AlbumList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AlbumList />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
