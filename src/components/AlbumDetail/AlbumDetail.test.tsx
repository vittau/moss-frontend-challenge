import { render } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlbumDetail from './AlbumDetail';

describe('<AlbumDetail />', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(
      <Router>
        <AlbumDetail
          data={{
            rank: 1,
            price: '$1',
            name: 'Test Album',
            artist: 'Test Artist',
            genre: 'Test Genre',
            image: 'https://via.placeholder.com/1000x1000',
            releaseDate: '01/01/2021',
            link: 'www.google.com',
          }}
        />
      </Router>
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });

  test('It should contain the cover', () => {
    expect(component.find('img.card-img-top').length).toBe(1);
  });

  test('It should contain the Open in Apple Music button', () => {
    expect(component.find('a.btn-primary').text().includes('Open in')).toBeTruthy();
  });
});
