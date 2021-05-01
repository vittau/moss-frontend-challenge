/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/NavBar/NavBar.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavBar />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
