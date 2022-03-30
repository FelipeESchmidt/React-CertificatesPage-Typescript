import styled, { css } from 'styled-components';
import { BsFillCaretDownFill, BsFillCaretUpFill } from 'react-icons/bs';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.darkGray};
  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.darkGray};
  box-sizing: border-box;
`;

export const StyledTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.white};
  max-width: 80%;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.5px;
  text-overflow: ellipsis;
`;

const StyledIcon = css`
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

export const StyledOpenIcon = styled(BsFillCaretDownFill)`
  ${StyledIcon};
`;

export const StyledCloseIcon = styled(BsFillCaretUpFill)`
  ${StyledIcon};
`;

const isOpenProps = css`
  padding-top: 10px;
  row-gap: 8px;
  transition: font-size 0.4s, margin 0.4s, padding 0.4s, opacity 1s 0.3s;
`;

const isCloseProps = css`
  font-size: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  row-gap: 0;
  transition: opacity 0.2s, font-size 0.4s, margin 0.4s, padding 0.4s;
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${({ open }: any) => (open ? `${isOpenProps}` : `${isCloseProps}`)};
  overflow: hidden;
`;

export const StyledText = styled.span`
  max-height: 3em;
  line-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.white};
`;

export const StyledStackList = styled.ul`
  list-style: inside;
  color: ${({ theme }) => theme.white};
`;

export const StyledStackItem = styled.li``;

export const StyledSeeMore = styled.button`
  line-height: ${({ open }: any) => (open ? '2.5em' : '0')};
  background-color: ${({ theme }) => theme.primary};
  border: 0;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
