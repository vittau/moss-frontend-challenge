import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export default function BackButton({ className, ...props }: IBackButtonProp) {
  return (
    <Link {...props} className="text-dark">
      <span className={`fa-layers fa-fw ${className}`}>
        <FontAwesomeIcon icon={faCircle} transform="grow-20" />
        <FontAwesomeIcon icon={faArrowLeft} inverse transform="grow-8" />
      </span>
    </Link>
  );
}

interface IBackButtonProp extends LinkProps {}
