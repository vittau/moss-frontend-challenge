/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: src/component/PageTitle/PageTitle.test.tsx
*/

import { shallow } from 'enzyme';
import React from 'react';
import PageTitle from './PageTitle';

describe('<PageTitle />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<PageTitle />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
