import React from 'react';
import { Badge } from 'react-bootstrap';

interface GenreToColorMap {
  [genre: string]: string;
}

// TODO: Recover the full list of tags and generate colors.
// This list is not exhaustive.
const palette: GenreToColorMap = {
  Default: '#f4d35e',
  Alternative: '#214342',
  Christian: '#45192d',
  Classical: '#16224c',
  Country: '#004565',
  'Hard Rock': '#452c36',
  'Hip-Hop/Rap': '#315a70',
  'K-Pop': '#dd6622',
  Metal: '#ff4455',
  Musicals: '#e2a233',
  Pop: '#769897',
  'R&B/Soul': '#917db0',
  Reggae: '#555555',
  Rock: '#e2a233',
  Soundtrack: '#ff5555',
  'Vocal Pop': '#0e7075',
};

export default function GenreBadge({ genre = 'Unknown genre' }: IGenreBadgeProp) {
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
