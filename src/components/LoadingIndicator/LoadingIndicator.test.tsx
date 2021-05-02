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
