import styled from 'styled-components';
import { Container } from '../../Styles/CommomStyles';

export const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.lightGray};
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const StyledSwitch = styled.div`
  position: relative;
  width: 32px;
  height: 14px;
  background-color: ${({ marked, theme }: any) => (marked ? theme.markedBack : theme.unMarkedBack)};
  border-radius: 20px;
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
