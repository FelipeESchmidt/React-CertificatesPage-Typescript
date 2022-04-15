import React from 'react';
import { limitText } from '../../Utils/textFunctions';
import { AccordeonInfoProps } from './index.types';
import * as S from './index.styles';
import { Link } from 'react-router-dom';

function AccordeonInfo({ info, status, linkTo }: AccordeonInfoProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggleInfo = () => {
    setOpen(!open);
  };

  return (
    <S.StyledWrapper>
      <S.StyledTop onClick={handleToggleInfo}>
        <S.StyledTitle>{info.title}</S.StyledTitle>
        {open ? (
          <S.StyledCloseIcon data-testid="close-info" />
        ) : (
          <S.StyledOpenIcon data-testid="open-info" />
        )}
      </S.StyledTop>
      <S.StyledInfo {...{ open: open }}>
        <S.StyledText>{limitText(info.description, 85)}</S.StyledText>
        <S.StyledStackList>
          {info.stacks.map((stack, index) => (
            <S.StyledStackItem key={index}>
              <S.StyledText>{stack}</S.StyledText>
            </S.StyledStackItem>
          ))}
        </S.StyledStackList>
        {status.complete && <S.StyledText>Recebido em: {info.endDate}</S.StyledText>}
        <Link to={linkTo}>
          <S.StyledSeeMore {...{ open: open }}>Mais detalhes</S.StyledSeeMore>
        </Link>
      </S.StyledInfo>
    </S.StyledWrapper>
  );
}

export default AccordeonInfo;
