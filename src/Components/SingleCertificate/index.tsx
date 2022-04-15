import * as React from 'react';

import { Container } from '../../Styles/CommomStyles';

import Breadcrumb, { buildBreadcrumbLink } from '../Breadcrumb';
import Switch from '../Switch';

import * as S from './index.styles';
import { SingleCertificateProps } from './index.types';

function SingleCertificate({ certificate }: SingleCertificateProps) {
  const renderCertificate = () =>
    certificate && (
      <S.CertificateWrapper>
        <S.LeftWrapper>
          <S.CertificateImg
            src={certificate.courseImg}
            alt={certificate.imageAlt}
            draggable={false}
          />
          <S.ButtonsWrapper>
            <S.Button href={certificate.courseUrl} target="blank" data-testid="knowTheCourse">
              Conheça o curso
            </S.Button>
            {certificate.status.complete ? (
              <S.Button href={certificate.certificateImg} target="blank" data-testid="certificate">
                Certificado
              </S.Button>
            ) : (
              <S.StyledPercentage percentage={certificate.status.percentage}>
                <span>Em desenvolvimento: {certificate.status.percentage}%</span>
              </S.StyledPercentage>
            )}
          </S.ButtonsWrapper>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Title>{certificate.info.title}</S.Title>
          <S.Description>{certificate.info.description}</S.Description>
          <S.StyledStackList>
            {certificate.info.stacks.map((stack: string, index: number) => (
              <S.StyledStackItem key={index}>
                <S.StyledText>{stack}</S.StyledText>
              </S.StyledStackItem>
            ))}
          </S.StyledStackList>
          {certificate.status.complete && (
            <S.StyledText>Recebido em: {certificate.info.endDate}</S.StyledText>
          )}
        </S.RightWrapper>
      </S.CertificateWrapper>
    );

  return (
    <S.Certificate>
      <Container>
        <S.TopWrapper>
          <Breadcrumb links={[buildBreadcrumbLink('Certificado', '')]}></Breadcrumb>
          <Switch />
        </S.TopWrapper>
        {renderCertificate()}
      </Container>
    </S.Certificate>
  );
}

export default SingleCertificate;
