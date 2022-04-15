import styled from 'styled-components';
import { getColorByPercentage } from '../../Styles/CommomStyles';
import { CertificateStatus } from './index.types';

export const Certificate = styled.div`
  position: relative;
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

export const Percentage = styled.div<{ status: CertificateStatus }>`
  :before {
    content: '${({ status }) => status.percentage}%';
    display: inline-block;
    width: 56px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: ${({ theme }) => `rgba(0, 0, 0, ${theme.alfa})`};
    border-radius: 5px;
    color: ${({ theme }) => theme.white};
  }
  span {
    position: relative;
    display: inline-block;
    width: calc(100% - 70px);
    height: 12px;
    margin: 8px 0;
    text-align: center;
    background-color: ${({ theme }) => `rgba(0, 0, 0, ${theme.alfa})`};
    border-radius: 5px;
    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: ${({ status }) => `calc(${status.percentage}%)`};
      margin-right: ${({ status }) => `calc(${100 - status.percentage}%)`};
      height: 100%;
      background-color: ${({ theme }) => theme.white};
      border-radius: 5px;
    }
  }
  position: relative;
  display: flex;
  justify-content: space-between;
  top: 5px;
  padding: 10px;
  background-color: ${({ status, theme }) => getColorByPercentage(status.percentage, theme)};
`;

export const CertificateImg = styled.img`
  width: 100%;
  min-width: 100%;
  height: calc(100vh / 4);
  min-height: calc(100vh / 4);

  object-fit: cover;
  vertical-align: middle;
  transition-duration: 300ms;

  user-select: none;
  cursor: pointer;

  box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.darkGray};

  /* NOT LOADED */
  background-position: center;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
`;
