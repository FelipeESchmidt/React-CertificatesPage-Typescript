import React from 'react';
import { Link } from 'react-router-dom';
import { certicicateRoute } from '../../Utils/routesConstants';
import AccordeonInfo from '../AccordeonInfo';
import * as S from './index.styles';
import { CertificateProps } from './index.types';

function Certificate({ imageSrc, imageAlt, info, id }: CertificateProps) {
  return (
    <S.Certificate data-testid="certificate">
      <Link to={`${certicicateRoute}/${id}`}>
        <S.CertificateImg src={imageSrc} alt={imageAlt} draggable={false} />
      </Link>
      <AccordeonInfo info={info} linkTo={`${certicicateRoute}/${id}`} />
    </S.Certificate>
  );
}

export default Certificate;
