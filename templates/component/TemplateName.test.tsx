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
