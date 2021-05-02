import React, { ChangeEvent, useState } from 'react';
import { Col, Image, Row, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ITunes } from '../../model/iTunes';
import { toSearchableText } from '../../utils/string';
import FilterInput from '../FilterInput/FilterInput';
import './AlbumList.scss';

export default function AlbumList({ data }: IAlbumListProp) {
  const history = useHistory();

  const [currentFilteredData, setCurrentFilteredData] = useState(data);

  const isEmpty = currentFilteredData && currentFilteredData.length === 0;

  const filterHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = toSearchableText(event.target.value);

    if (searchTerm && searchTerm.length > 0) {
      setCurrentFilteredData(data.filter((album) => toSearchableText(album.name).includes(searchTerm) || toSearchableText(album.artist).includes(searchTerm)));
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
                      <Image src={e.image.replace('170x170bb.png', '100x100bb.jpg')} rounded style={{ maxHeight: '5rem', width: 'auto' }} />
                    </td>
                    <td className="align-middle">
                      <p className="font-weight-bold mb-0">{e.name}</p>
                      <small>by {e.artist}</small>
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
