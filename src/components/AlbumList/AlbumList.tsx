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
    <div className="AlbumList">
      <Row>
        <Col>
          <FilterInput onChange={filterHandler} />
        </Col>
      </Row>

      {isEmpty ? (
        <EmptyResults />
      ) : (
        <Row>
          <Col>
            <Table responsive striped borderless hover>
              <TableHeader />
              <tbody>
                {currentFilteredData.map((album) => (
                  <TableDataRow key={album.rank} album={album} onClick={() => history.push(`/album/${album.rank}`)} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </div>
  );
}

const TableHeader = () => (
  <thead>
    <tr>
      <th>#</th>
      <th>Cover</th>
      <th>Album</th>
    </tr>
  </thead>
);

const EmptyResults = () => (
  <Row>
    <Col>
      <p className="text-muted">There were no results for your search query...</p>
    </Col>
  </Row>
);

const TableDataRow = ({ album, onClick }: { album: ITunes; onClick: () => void }) => (
  <tr onClick={onClick} style={{ cursor: 'pointer' }}>
    <td className="align-middle album-rank">{album.rank}</td>
    <td className="align-middle">
      <Image src={thumbnailTransform({ imageURL: album.image, size: 100 })} rounded className="album-image" />
    </td>
    <td className="align-middle" style={{ width: '100%' }}>
      <AlbumInfo album={album} />
    </td>
  </tr>
);

const AlbumInfo = ({ album }: { album: ITunes }) => (
  <>
    <p className="font-weight-bold mb-0">{album.name}</p>
    <small>by {album.artist}</small>
    <br />
    <GenreBadge genre={album.genre} />
  </>
);

interface IAlbumListProp {
  data: ITunes[];
}
