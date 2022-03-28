import React from "react";
import { Container } from "../../Styles/CommomStyles";
import SearchInput from "../SearchInput";
import { certificatesText } from "./index.constants";
import * as S from "./index.styles";

function Header() {
  return (
    <S.StyledHeader>
      <Container>
        <S.StyledWrapper>
          <S.StyledTitle>{certificatesText}</S.StyledTitle>
          <SearchInput />
        </S.StyledWrapper>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;
