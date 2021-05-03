import React from 'react';
import { Col, Image, Row, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useFilter } from '../../hooks/useFilter';
import { ITunes } from '../../model/iTunes';
import { thumbnailTransform } from '../../utils/images';
import FilterInput from '../FilterInput/FilterInput';
import GenreBadge from '../GenreBadge/GenreBadge';
import './AlbumList.scss';

export default function AlbumList({ data }: IAlbumListProp) {
  // Used for navigation
  const history = useHistory();

  // Hook that controls the filtering state
  const [currentFilteredData, filterHandler] = useFilter(data);

  // Determines whether the list is empty or not
  const isEmpty = currentFilteredData && currentFilteredData.length === 0;

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
  <tr onClick={onClick} className="album-row">
    <td className="align-middle album-rank">{album.rank}</td>
    <td className="align-middle">
      <Image src={thumbnailTransform({ imageURL: album.image, size: 100 })} rounded className="album-image" />
    </td>
    <td className="align-middle w-100">
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
