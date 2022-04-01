import React from 'react';
import { Container } from '../../Styles/CommomStyles';
import SearchInput from '../SearchInput';
import { certificatesText } from './index.constants';
import { HeaderTypes } from './index.types';
import * as S from './index.styles';

function Header({ hideInput = false }: HeaderTypes) {
  return (
    <S.StyledHeader>
      <Container>
        <S.StyledWrapper>
          <S.StyledTitle>{certificatesText}</S.StyledTitle>
          {!hideInput && <SearchInput />}
        </S.StyledWrapper>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;
