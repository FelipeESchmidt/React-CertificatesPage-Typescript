import styled from "styled-components";

export const Certificate = styled.div`
  width: calc(100% / 3);
  padding: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 968px) {
    width: 360px;
    padding: 10px;
  }
`;

export const CertificateImg = styled.img`
  width: calc(100%);
  height: auto;
  vertical-align: middle;
  transition-duration: 300ms;

  user-select: none;
  cursor: pointer;

  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.darkGray};

  :hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 5px 1px ${({theme}) => theme.black};
  }
`;
