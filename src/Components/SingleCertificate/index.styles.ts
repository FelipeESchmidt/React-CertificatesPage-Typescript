import styled, { css } from 'styled-components';

const mediaMid = '@media(max-width: 968px)';
const mediaSmall = '@media(max-width: 430px)';

export const Certificate = styled.div`
  min-height: calc(100vh - 190px);
  padding-bottom: 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const CertificateWrapper = styled.div`
  display: flex;
  padding: 20px 0;
  ${mediaMid} {
    flex-direction: column;
  }
`;

export const LeftWrapper = styled.div`
  width: 35%;
  ${mediaMid} {
    width: 100%;
    padding: 0 10%;
  }
  ${mediaSmall} {
    padding: 0 2%;
  }
  box-sizing: border-box;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 65%;
  padding-left: 2%;
  ${mediaMid} {
    width: 100%;
    padding: 0 10%;
  }
  ${mediaSmall} {
    padding: 0 2%;
  }
  box-sizing: border-box;
`;

export const CertificateImg = styled.img`
  width: 100%;
  min-width: 100%;
  height: calc(100vh / 4);
  min-height: calc(100vh / 4);

  object-fit: cover;
  vertical-align: middle;

  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.darkGray};
  user-select: none;

  /* NOT LOADED */
  background-position: center;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};

  ${mediaMid} {
    height: calc(100vh / 3.5);
  }
  ${mediaSmall} {
    height: calc(100vh / 4);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding: 2% 0;
  box-sizing: border-box;
`;

export const Button = styled.a`
  width: 100%;
  padding: 5px;
  background-color: #1e88e5;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.5px;
  box-sizing: border-box;
  box-shadow: 0 2px 2px 0 ${({ theme }) => theme.darkGray},
    0 3px 1px -2px ${({ theme }) => theme.darkGray}, 0 1px 5px 0 ${({ theme }) => theme.darkGray};
`;

const textColor = css`
  color: ${({ theme }) => theme.white};
`;

export const Title = styled.h3`
  ${textColor};
`;

export const Description = styled.p`
  ${textColor};
`;

export const StyledText = styled.span`
  ${textColor};
`;

export const StyledStackList = styled.ul`
  ${textColor};
  list-style: inside;
`;

export const StyledStackItem = styled.li``;
