import * as React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../Styles/CommomStyles';
import { fetchCertificates } from '../../Redux/App/App.actions';
import { appSelector } from '../../Redux/App/App.selectors';

import { CertificateProps } from '../Certificate/index.types';
import Breadcrumb, { buildBreadcrumbLink } from '../Breadcrumb';
import Loading from '../Loading';
import Switch from '../Switch';

import * as S from './index.styles';

function SingleCertificate() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { certificates, loading } = useSelector(appSelector);

  const [certificate, setCertificate] = React.useState<CertificateProps>();
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (certificates.length === 0) {
      dispatch(fetchCertificates);
    } else {
      setCertificate(certificates.find((c) => c.id === id));
      setLoaded(true);
    }
  }, [dispatch, certificates, id]);

  const renderUndefinedCertificate = () => <Navigate to="/" replace />;

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
            <S.Button href={certificate.courseUrl} target="blank">
              Conheça o curso
            </S.Button>
            {certificate.status.complete ? (
              <S.Button href={certificate.certificateImg} target="blank">
                Certificado
              </S.Button>
            ) : (
              <S.StyledText>Em desenvolvimento: {certificate.status.percentage}%</S.StyledText>
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
          <S.StyledText>Recebido em: {certificate.info.endDate}</S.StyledText>
        </S.RightWrapper>
      </S.CertificateWrapper>
    );

  const renderContent = () =>
    !certificate && loaded ? renderUndefinedCertificate() : renderCertificate();

  return (
    <S.Certificate>
      <Container>
        <S.TopWrapper>
          <Breadcrumb links={[buildBreadcrumbLink('Certificado', '')]}></Breadcrumb>
          <Switch />
        </S.TopWrapper>
        {loading ? <Loading /> : renderContent()}
      </Container>
    </S.Certificate>
  );
}

export default SingleCertificate;
