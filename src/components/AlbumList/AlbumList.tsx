import React, { ChangeEvent, useState } from 'react';
import { Col, Image, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ITunes } from '../../model/iTunes';
import { toSearchableText } from '../../utils/string';
import FilterInput from '../FilterInput/FilterInput';
import './AlbumList.scss';

export default function AlbumList({ data }: IAlbumListProp) {
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
            <Table responsive striped size="sm" width="100%" borderless>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Cover</th>
                  <th>Album</th>
                </tr>
              </thead>
              <tbody>
                {currentFilteredData.map((e, index) => (
                  <tr key={e.rank}>
                    <td className="align-middle">{e.rank}</td>
                    <td className="align-middle">
                      <Link to={`/album/${e.rank}`}>
                        <Image src={e.image.replace('170x170bb.png', '100x100bb.jpg')} rounded style={{ maxHeight: '5rem', width: 'auto' }} />
                      </Link>
                    </td>
                    <td className="align-middle">
                      <Link className="text-light font-weight-bold" to={`/album/${e.rank}`}>
                        {e.name}
                      </Link>
                      <br />
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
