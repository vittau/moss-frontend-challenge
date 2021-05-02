/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/LoadingIndicator/LoadingIndicator.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import LoadingIndicator from './LoadingIndicator';

describe('<LoadingIndicator />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<LoadingIndicator />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
