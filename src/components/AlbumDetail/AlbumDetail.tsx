import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ITunes } from '../../model/iTunes';
import './AlbumDetail.scss';

export default function AlbumDetail({ data }: IAlbumDetailProp) {
  const { name, artist, genre, image, releaseDate, link } = data;
  return (
    <Row className="AlbumDetail">
      <Col className="d-flex justify-content-center">
        <Card text="light" style={{ maxWidth: '20rem' }} className="card-background mb-4">
          <Link to="/" className="text-dark">
            <span className="fa-layers fa-fw" style={{ position: 'absolute', top: '1.25em', left: '1.25em' }}>
              <FontAwesomeIcon icon={faCircle} transform="grow-20" />
              <FontAwesomeIcon icon={faArrowLeft} inverse transform="grow-8" />
            </span>
          </Link>
          <Card.Img variant="top" src={image.replace('170x170bb.png', '1000x1000bb.jpg')} />
          <Card.Body>
            <Badge variant="info" className="mb-2">
              {genre}
            </Badge>
            <Card.Title className="mb-2">{name}</Card.Title>
            <Card.Subtitle className="mb-2">by {artist}</Card.Subtitle>
            <Card.Text>
              <small>Released on: {releaseDate}</small>
              <Button className="mt-4" href={link} target="_blank" variant="primary" size="lg" block>
                Open in <FontAwesomeIcon icon={faApple} />
                Music
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

interface IAlbumDetailProp {
  data: ITunes;
}
