import styled, { css } from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export const StyledWrapper = styled.div`
  display: flex;
  height: 35px;
`;

const StyledIcon = css`
  height: 100%;
  padding: 0 8px;
  color: ${({theme}) => theme.white};
  background-color: ${({ theme }) => theme.black};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.black};
  }
`;

export const StyledSearchIcon = styled(BiSearchAlt)`
  ${StyledIcon};
`;

export const StyledCloseIcon = styled(AiOutlineClose)`
  ${StyledIcon};
`;

export const StyledSearchInput = styled.input`
  width: ${({ open }: any) => (open ? "220px" : "0")};
  padding: ${({ open }: any) => (open ? "0 4px" : "0")};
  height: 100%;
  line-height: 35px;
  font-size: 18px;
  border: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  outline: none;
  transition: width 1s;
`;
