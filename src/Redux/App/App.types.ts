import { CertificateProps } from '../../Components/Certificate/index.types';
import { ThemeModes } from '../../Theme/index.theme';

export const SET_SEARCH = '@app/SET_SEARCH';
export const CHANGE_MODE = '@app/CHANGE_MODE';
export const CERTIFICATES_LOAD = '@app/CERTIFICATES_LOAD';
export const CERTIFICATES_LOADED = '@app/CERTIFICATES_LOADED';
export const CERTIFICATES_LOADED_WITH_ERROR = '@app/CERTIFICATES_LOADED_WITH_ERROR';

export interface AppTypes {
  allCertificates: Array<CertificateProps>;
  certificates: Array<CertificateProps>;
  loading: boolean;
  search: string;
  mode: ThemeModes;
}

export interface CertificateResponseTypes {
  description: string;
  endDate: string;
  stacks: Array<string>;
  title: string;
  imageAlt: string;
  courseImg: string;
  courseUrl: string;
  certificateImg: string;
  percentage: number;
  _id: string;
}
