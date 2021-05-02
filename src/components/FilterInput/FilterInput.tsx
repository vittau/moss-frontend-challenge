import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './FilterInput.scss';

export default function FilterInput({ onChange }: IFilterInputProp) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon={faFilter} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl placeholder="Filter" aria-label="Filter" aria-describedby="basic-addon1" onChange={onChange} />
    </InputGroup>
  );
}

interface IFilterInputProp {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
