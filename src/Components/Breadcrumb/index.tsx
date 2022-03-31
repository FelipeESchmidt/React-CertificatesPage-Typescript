import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.styles';
import { LinkProps } from './index.types';

function Breadcrumb({ links }: { links: Array<any> }) {
  return (
    <S.Breadcrumb>
      <Link to="/">Home</Link>
      {links.map((link, index) => (
        <Link key={index} to={link.url}>
          {link.title}
        </Link>
      ))}
    </S.Breadcrumb>
  );
}

export const buildBreadcrumbLink = (title: string, url: string): LinkProps => ({ title, url });

export default Breadcrumb;
