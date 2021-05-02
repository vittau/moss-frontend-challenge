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
