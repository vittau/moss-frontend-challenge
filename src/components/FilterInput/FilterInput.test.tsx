/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/FilterInputt/FilterInputt.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import FilterInputt from './FilterInput';

describe('<FilterInputt />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FilterInputt />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
