/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Albums/Albums.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import NavbarLayout from './NavbarLayout';

describe('<Albums />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavbarLayout />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
