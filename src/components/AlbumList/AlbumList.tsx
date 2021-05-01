import React from 'react';
import { Table } from 'react-bootstrap';
import { ITunes } from '../../model/iTunes';
import './AlbumList.scss';

const headers = ['Artist', 'Album'];

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
            <td>{index + 1}</td>
            <td>{e.artist}</td>
            <td>{e.name}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

interface IAlbumListProp {
  data: ITunes[];
}
