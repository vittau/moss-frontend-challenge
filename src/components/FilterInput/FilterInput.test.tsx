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
