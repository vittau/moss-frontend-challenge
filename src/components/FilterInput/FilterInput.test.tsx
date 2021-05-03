import { shallow } from 'enzyme';
import React from 'react';
import FilterInput from './FilterInput';

describe('<FilterInputt />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<FilterInput onChange={() => null} />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
