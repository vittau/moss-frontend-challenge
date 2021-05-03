import { shallow } from 'enzyme';
import React from 'react';
import BackButton from './BackButton';

describe('<BackButton />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<BackButton to="/" />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
