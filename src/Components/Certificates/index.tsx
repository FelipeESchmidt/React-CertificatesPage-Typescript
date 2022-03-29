import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../Styles/CommomStyles';
import { fetchCertificates } from '../../Redux/App/App.actions';
import { appSelector } from '../../Redux/App/App.selectors';

import { CertificateProps } from '../Certificate/index.types';
import Certificate from '../Certificate';
import Loading from '../Loading';

import {
  baseFileURL,
  baseImageURL,
  certificatesTitle,
  noCertificatesTitle,
} from './index.constants';
import * as S from './index.styles';

function Certificates() {
  const dispatch = useDispatch();
  const { certificates, loading } = useSelector(appSelector);

  React.useEffect(() => {
    dispatch(fetchCertificates);
  }, [dispatch]);

  const renderEmptyList = () => <>{noCertificatesTitle}</>;

  const renderCertificates = () => (
    <S.CertificatesWrapper>
      {certificates.map((certificate: CertificateProps, index) => (
        <Certificate
          key={index}
          fileSrc={`${baseFileURL}${certificate.fileSrc}`}
          imageSrc={`${baseImageURL}${certificate.imageSrc}`}
          imageAlt={certificate.imageAlt}
          info={certificate.info}
        />
      ))}
    </S.CertificatesWrapper>
  );

  const renderContent = () =>
    certificates.length === 0 ? renderEmptyList() : renderCertificates();

  return (
    <S.Certificates>
      <Container>
        <S.CertificatesTitle>{certificatesTitle}</S.CertificatesTitle>
        {loading ? <Loading /> : renderContent()}
      </Container>
    </S.Certificates>
  );
}

export default Certificates;
