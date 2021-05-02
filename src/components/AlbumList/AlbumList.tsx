import React from 'react';
import { Image, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ITunes } from '../../model/iTunes';
import './AlbumList.scss';

const headers = ['Cover', 'Album'];

export default function AlbumList({ data }: IAlbumListProp) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((e, index) => (
          <tr key={index}>
            <td className="align-middle">{index + 1}</td>
            <td className="align-middle">
              <Image src={e.image} thumbnail style={{ maxHeight: 100, width: 'auto' }} />
            </td>
            <td className="align-middle">
              <Link to={`/album/${index + 1}`}>{e.name}</Link>
              <br />
              <small>by {e.artist}</small>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

interface IAlbumListProp {
  data: ITunes[];
}
