import styled from 'styled-components';

export const Certificates = styled.div`
  min-height: calc(100vh - 190px);
  padding-bottom: 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;
`;

export const CertificatesTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  padding: 20px 0;
`;

export const CertificatesEmptyWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 80px 0;
  justify-content: center;
`;

export const CertificatesEmptyText = styled.h2`
  color: ${({ theme }) => theme.white};
`;

export const CertificatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`;
