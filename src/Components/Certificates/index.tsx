import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../Styles/CommomStyles';
import { fetchCertificates } from '../../Redux/App/App.actions';
import { appSelector } from '../../Redux/App/App.selectors';
import Certificate from '../Certificate';
import { CertificateProps } from '../Certificate/index.types';

import { baseFileURL, baseImageURL } from './index.constants';
import * as S from './index.styles';

function Certificates() {
  const dispatch = useDispatch();
  const { certificates, loading } = useSelector(appSelector);

  React.useEffect(() => {
    dispatch(fetchCertificates);
  }, [dispatch]);

  if (loading) return <>Loading</>;

  return (
    <S.Certificates>
      <Container>
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
      </Container>
    </S.Certificates>
  );
}

export default Certificates;
