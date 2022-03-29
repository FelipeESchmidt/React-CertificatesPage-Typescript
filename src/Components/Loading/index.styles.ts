import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 80px;
`;

export const StyledLoading = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid white;
  border-left: 3px solid ${({ theme }) => theme.black};
  box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.black};
  transform: rotate(0deg);
  animation: ${loadingAnimation} 1.5s linear infinite both;
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin: 30px 0;
`;

export const StyledTitle = styled.h3`
  font-size: 45px;
  font-family: 'The Nautigal', cursive;
  text-shadow: 0 0 4px ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  user-select: none;
`;

export const Dots = styled.div`
  position: relative;
  display: ${({ visible }: any) => (visible ? `block` : `none`)};
  width: 10px;
  height: 10px;
  margin-left: 10px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 0px 4px 0px ${({ theme }) => theme.black};
  font-size: 0;

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    height: 30%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.black};
    box-shadow: 0px 0px 2px 0px ${({ theme }) => theme.black};
  }
`;
