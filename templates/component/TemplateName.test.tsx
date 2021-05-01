/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/TemplateName/TemplateName.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import TemplateName from './TemplateName';

describe('<TemplateName />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TemplateName />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
