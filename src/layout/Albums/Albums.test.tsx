/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/Albums/Albums.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import Albums from './Albums';

describe('<Albums />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Albums />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
