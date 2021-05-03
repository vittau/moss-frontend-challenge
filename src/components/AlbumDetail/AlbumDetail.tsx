import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { ITunes } from '../../model/iTunes';
import { thumbnailTransform } from '../../utils/images';
import BackButton from '../BackButton/BackButton';
import GenreBadge from '../GenreBadge/GenreBadge';
import './AlbumDetail.scss';

export default function AlbumDetail({ data }: IAlbumDetailProp) {
  const { name, artist, genre, image, releaseDate, link } = data;

  return (
    <Row className="AlbumDetail">
      <Col className="d-flex justify-content-center">
        <Card text="light" className="card card-background mb-4">
          <BackButton to="/" className="card-back-button" />
          <Card.Img variant="top" src={thumbnailTransform({ imageURL: image, size: 1000 })} />
          <Card.Body>
            <GenreBadge genre={genre} />
            <Card.Title className="mb-2">{name}</Card.Title>
            <Card.Subtitle className="mb-2">by {artist}</Card.Subtitle>
            <Card.Text>
              <small>Released on: {releaseDate}</small>
              <AppleMusicButton url={link} />
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

const AppleMusicButton = ({ url }: { url: string }) => (
  <Button className="mt-4" href={url} target="_blank" variant="primary" size="lg" block>
    Open in <FontAwesomeIcon icon={faApple} />
    Music
  </Button>
);

interface IAlbumDetailProp {
  data: ITunes;
}
