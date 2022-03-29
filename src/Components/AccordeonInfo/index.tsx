import React from 'react';
import { AccordeonInfoProps } from './index.types';
import * as S from './index.styles';

function AccordeonInfo({ info }: { info: AccordeonInfoProps }) {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleToggleInfo = () => {
    setOpen(!open);
  };

  return (
    <S.StyledWrapper>
      <S.StyledTop>
        <S.StyledTitle>{info.title}</S.StyledTitle>
        {open ? (
          <S.StyledCloseIcon data-testid="close-info" onClick={handleToggleInfo} />
        ) : (
          <S.StyledOpenIcon data-testid="open-info" onClick={handleToggleInfo} />
        )}
      </S.StyledTop>
      <S.StyledInfo {...{ open: open }}>
        <S.StyledText>{info.description}</S.StyledText>
        <S.StyledStackList>
          {info.stacks.map((stack, index) => (
            <S.StyledStackItem key={index}>
              <S.StyledText>{stack}</S.StyledText>
            </S.StyledStackItem>
          ))}
        </S.StyledStackList>
        <S.StyledText>Recebido em: {info.endDate}</S.StyledText>
        <S.StyledSeeMore {...{ open: open }}>Mais detalhes</S.StyledSeeMore>
      </S.StyledInfo>
    </S.StyledWrapper>
  );
}

export default AccordeonInfo;
