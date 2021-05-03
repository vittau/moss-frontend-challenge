import { shallow } from 'enzyme';
import React from 'react';
import AlbumList from './AlbumList';

describe('<AlbumList />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <AlbumList
        data={[
          {
            rank: 1,
            price: '$1',
            name: 'Test Album',
            artist: 'Test Artist',
            genre: 'Test Genre',
            image: 'https://via.placeholder.com/1000x1000',
            releaseDate: '01/01/2021',
            link: 'www.google.com',
          },
        ]}
      />
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
