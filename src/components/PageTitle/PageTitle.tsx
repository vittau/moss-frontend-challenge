import React from 'react';

export default function PageTitle() {
  return (
    <div className="d-inline-block text-light mt-4">
      <h1 className="text-right mb-0">Top 100 Albums</h1>
      <p className="text-right font-weight-bold mb-0">from iTunes</p>
      <p className="text-right text-muted font-weight-light mb-0">
        <small>
          Developed by{' '}
          <a className="text-muted" href="https://www.vitormach.dev/" target="_blank" rel="noopener noreferrer">
            Vitor Machado
          </a>
        </small>
      </p>
    </div>
  );
}
