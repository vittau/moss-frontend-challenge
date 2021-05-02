import React from 'react';
import { Badge } from 'react-bootstrap';
import './GenreBadge.scss';

interface GenreToColorMap {
  [genre: string]: string;
}

// TODO: Recover the full list of tags and generate colors.
// This list is not exhaustive.
const palette: GenreToColorMap = {
  Metal: '#ff4455',
  Christian: '#45192d',
  Country: '#004565',
  Alternative: '#214342',
  Pop: '#769897',
  Rock: '#e2a233',
  'K-Pop': '#dd6622',
  Soundtrack: '#ff5555',
  'Hip-Hop/Rap': '#315a70',
  Musicals: '#e2a233',
  Classical: '#16224c',
  'R&B/Soul': '#917db0',
  'Hard Rock': '#452c36',
  'Vocal Pop': '#0e7075',
  Reggae: '#555555',
  Default: '#f4d35e',
};

export default function GenreBadge({ genre = 'No genre' }: IGenreBadgeProp) {
  return (
    <Badge style={{ backgroundColor: palette[genre] || palette.Default }} className="mb-2">
      {genre}
    </Badge>
  );
}

interface IGenreBadgeProp {
  genre?: string;
}
GenreBadge.defaultProps = { genre: 'No genre' };
