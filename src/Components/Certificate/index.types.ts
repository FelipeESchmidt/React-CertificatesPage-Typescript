import { InfoProps } from '../AccordeonInfo/index.types';

export interface CertificateStatus {
  complete: boolean;
  percentage: number;
}

export interface CertificateProps {
  id: string;
  certificateImg: string;
  courseUrl: string;
  courseImg: string;
  imageAlt: string;
  info: InfoProps;
  status: CertificateStatus;
}
