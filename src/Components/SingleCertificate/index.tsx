import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../Styles/CommomStyles';
import { fetchCertificates } from '../../Redux/App/App.actions';
import { appSelector } from '../../Redux/App/App.selectors';
import { baseImageURL } from '../../Utils/baseUrlConstants';

import Loading from '../Loading';
import Switch from '../Switch';

import * as S from './index.styles';

function SingleCertificate() {
  const dispatch = useDispatch();
  const { certificates, loading } = useSelector(appSelector);

  React.useEffect(() => {
    dispatch(fetchCertificates);
  }, [dispatch]);

  const renderEmptyList = () => <>NADA</>;

  const renderCertificate = () => (
    <S.CertificateWrapper>
      <S.LeftWrapper>
        <S.CertificateImg
          src={`${baseImageURL}${certificates[0].imageSrc}`}
          alt={certificates[0].imageAlt}
          draggable={false}
        />
        <S.ButtonsWrapper>
          <S.Button href={`${baseImageURL}${certificates[0].imageSrc}`} target="blank">
            Conheça o curso
          </S.Button>
          <S.Button href={`${baseImageURL}${certificates[0].imageSrc}`} target="blank">
            Certificado
          </S.Button>
        </S.ButtonsWrapper>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Title>{certificates[0].info.title}</S.Title>
        <S.Description>{certificates[0].info.description}</S.Description>
        <S.StyledStackList>
          {certificates[0].info.stacks.map((stack: string, index: number) => (
            <S.StyledStackItem key={index}>
              <S.StyledText>{stack}</S.StyledText>
            </S.StyledStackItem>
          ))}
        </S.StyledStackList>
        <S.StyledText>Recebido em: {certificates[0].info.endDate}</S.StyledText>
      </S.RightWrapper>
    </S.CertificateWrapper>
  );

  const renderContent = () => (certificates.length === 0 ? renderEmptyList() : renderCertificate());

  return (
    <S.Certificate>
      <Container>
        <S.TopWrapper>
          Home / Certificado
          <Switch />
        </S.TopWrapper>
        {loading ? <Loading /> : renderContent()}
      </Container>
    </S.Certificate>
  );
}

export default SingleCertificate;
