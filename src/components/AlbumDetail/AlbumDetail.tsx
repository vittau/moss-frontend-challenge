import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ITunes } from '../../model/iTunes';
import './AlbumDetail.scss';

export default function AlbumDetail({ data }: IAlbumDetailProp) {
  const { name, price, artist, genre, image, releaseDate } = data;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image.replace('170x170bb', '500x500bb')} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
        <Link to="/">
          <Button variant="primary">Go back</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

interface IAlbumDetailProp {
  data: ITunes;
}
