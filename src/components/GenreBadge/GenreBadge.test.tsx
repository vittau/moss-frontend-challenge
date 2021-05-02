import { shallow } from 'enzyme';
import React from 'react';
import GenreBadge from './GenreBadge';

describe('<GenreBadge />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<GenreBadge />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
