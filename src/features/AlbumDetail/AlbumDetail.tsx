import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import BackButton from '../../components/BackButton/BackButton';
import GenreBadge from '../../components/GenreBadge/GenreBadge';
import { ITunes } from '../../model/iTunes';
import { thumbnailTransform } from '../../utils/images';
import { nth } from '../../utils/string';
import './AlbumDetail.scss';

export default function AlbumDetail({ data }: IAlbumDetailProp) {
  const { artist, genre, image, link, name, rank, releaseDate } = data;

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
              <small>Currently ranked on the {`${rank}${nth(rank)}`} place</small>
              <br />
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
