/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/ErrorToast/ErrorToast.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import ErrorToast from './ErrorToast';

describe('<ErrorToast />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<ErrorToast />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
