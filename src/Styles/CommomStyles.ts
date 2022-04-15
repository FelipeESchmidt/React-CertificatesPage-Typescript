import styled from 'styled-components';

export const getColorByPercentage = (percentage: number, theme: any) => {
  if (percentage < 33) return theme.red;
  if (percentage < 66) return theme.yellow;
  if (percentage < 100) return theme.green;
  return theme.blue;
};

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2%;
`;
