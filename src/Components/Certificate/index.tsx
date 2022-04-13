import React from 'react';
import { Link } from 'react-router-dom';
import { certicicateRoute } from '../../Utils/routesConstants';
import AccordeonInfo from '../AccordeonInfo';
import * as S from './index.styles';
import { CertificateProps } from './index.types';

function Certificate({ courseImg, imageAlt, info, id, status }: CertificateProps) {
  return (
    <S.Certificate data-testid="certificate">
      <S.Percentage status={status}>
        <span />
      </S.Percentage>
      <Link to={`${certicicateRoute}/${id}`}>
        <S.CertificateImg src={courseImg} alt={imageAlt} draggable={false} />
      </Link>
      <AccordeonInfo info={info} status={status} linkTo={`${certicicateRoute}/${id}`} />
    </S.Certificate>
  );
}

export default Certificate;
