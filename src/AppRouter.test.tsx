// src/AppRouter.test.tsx
import { shallow } from 'enzyme';
import React from 'react';
import AppRouter from './AppRouter';

describe('<AppRouter />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<AppRouter />);
  });

  test('renders without crashing', () => {
    expect(component.length).toBe(1);
  });
});
