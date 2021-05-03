import { shallow } from 'enzyme';
import React from 'react';
import MainLayout from './MainLayout';

describe('<Albums />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MainLayout>test</MainLayout>);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
