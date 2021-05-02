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
