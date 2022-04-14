import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../Styles/CommomStyles';
import { fetchCertificates } from '../../Redux/App/App.actions';
import { appSelector } from '../../Redux/App/App.selectors';

import { CertificateProps } from '../Certificate/index.types';
import Certificate from '../Certificate';
import Loading from '../Loading';
import Switch from '../Switch';

import { certificatesTitle, noCertificatesTitle } from './index.constants';
import * as S from './index.styles';

function Certificates() {
  const dispatch = useDispatch();
  const { certificates, loading } = useSelector(appSelector);

  React.useEffect(() => {
    if (!!!certificates) {
      dispatch(fetchCertificates);
    }
  }, [dispatch, certificates]);

  const renderEmptyList = () => (
    <S.CertificatesEmptyWrapper>
      <S.CertificatesEmptyText>{noCertificatesTitle}</S.CertificatesEmptyText>
    </S.CertificatesEmptyWrapper>
  );

  const renderCertificates = () => (
    <S.CertificatesWrapper>
      {certificates.map((certificate: CertificateProps, index) => (
        <Certificate
          key={index}
          id={certificate.id}
          courseUrl={certificate.courseUrl}
          certificateImg={certificate.certificateImg}
          courseImg={certificate.courseImg}
          imageAlt={certificate.imageAlt}
          info={certificate.info}
          status={certificate.status}
        />
      ))}
    </S.CertificatesWrapper>
  );

  const renderContent = () =>
    certificates.length === 0 ? renderEmptyList() : renderCertificates();

  return (
    <S.Certificates>
      <Container>
        <S.TopWrapper>
          <S.CertificatesTitle>{certificatesTitle}</S.CertificatesTitle>
          <Switch />
        </S.TopWrapper>
        {loading ? <Loading /> : renderContent()}
      </Container>
    </S.Certificates>
  );
}

export default Certificates;
