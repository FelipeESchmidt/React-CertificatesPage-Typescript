import styled from 'styled-components';

export const Certificate = styled.div`
  width: calc(100% / 3);
  padding: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 400px;
    padding: 10px;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 1%;
  }
`;

export const CertificateImg = styled.img`
  width: 100%;
  height: calc(100vh / 4);
  object-fit: cover;
  vertical-align: middle;
  transition-duration: 300ms;

  user-select: none;
  cursor: pointer;

  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.darkGray};

  :hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.black};
  }
`;
