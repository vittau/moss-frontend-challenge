import React, { ChangeEvent, useState } from 'react';
import { Col, Image, Row, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ITunes } from '../../model/iTunes';
import { thumbnailTransform } from '../../utils/images';
import { toSearchableText } from '../../utils/string';
import FilterInput from '../FilterInput/FilterInput';
import GenreBadge from '../GenreBadge/GenreBadge';
import './AlbumList.scss';

export default function AlbumList({ data }: IAlbumListProp) {
  // Used for navigation
  const history = useHistory();

  // Holds the currently filtered data
  const [currentFilteredData, setCurrentFilteredData] = useState(data);

  // Determines whether the list is empty or not
  const isEmpty = currentFilteredData && currentFilteredData.length === 0;

  // Handler function for the filtering input
  const filterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = toSearchableText(event.target.value ?? '');

    // Filters albums by album, artist or genre
    const filterFunction = (album: ITunes) => {
      const { name, artist, genre } = album;
      const searchableTerms = [toSearchableText(name), toSearchableText(artist), toSearchableText(genre)];
      return searchableTerms.find((term) => term.includes(searchTerm));
    };

    if (searchTerm.length > 0) {
      setCurrentFilteredData(data.filter(filterFunction));
    } else {
      setCurrentFilteredData(data);
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <FilterInput onChange={filterHandler} />
        </Col>
      </Row>

      {isEmpty ? (
        <Row>
          <Col className="text-muted">There were no results for your search query...</Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Table responsive striped width="100%" borderless hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Cover</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                {currentFilteredData.map((e, index) => (
                  <tr key={e.rank} onClick={() => history.push(`/album/${e.rank}`)} style={{ cursor: 'pointer' }}>
                    <td className="align-middle">{e.rank}</td>
                    <td className="align-middle">
                      <Image src={thumbnailTransform({ imageURL: e.image, size: 100 })} rounded style={{ maxHeight: '5rem', width: 'auto' }} />
                    </td>
                    <td className="align-middle" style={{ width: '100%' }}>
                      <p className="font-weight-bold mb-0">{e.name}</p>
                      <small>by {e.artist}</small>
                      <br />
                      <GenreBadge genre={e.genre} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </div>
  );
}

interface IAlbumListProp {
  data: ITunes[];
}
