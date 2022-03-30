import styled from 'styled-components';

export const StyledSwitch = styled.div`
  position: relative;
  width: 32px;
  height: 14px;
  background-color: ${({ marked, theme }: any) => (marked ? theme.markedBack : theme.unMarkedBack)};
  border-radius: 20px;
  cursor: pointer;
`;

export const StyledMarker = styled.span`
  position: absolute;
  top: -3px;
  ${({ marked }: any) => (marked ? 'right: -3px' : 'left: -3px')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ marked, theme }: any) => (marked ? theme.marked : theme.unMarked)};
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0px 5px rgba(120, 120, 120, 0.15);
  }
`;
