import React from 'react';
import './PageTitle.scss';

export default function PageTitle(/* props: IPageTitleProp */) {
  return (
    <div className="d-inline-block text-light mt-4">
      <h1 className="text-right mb-0">Top 100 Albums</h1>
      <p className="text-right font-weight-bold">from iTunes</p>
    </div>
  );
}

interface IPageTitleProp {
  // TODO
}
