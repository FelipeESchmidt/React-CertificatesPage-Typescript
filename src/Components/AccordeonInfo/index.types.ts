import { CertificateStatus } from '../Certificate/index.types';

export interface InfoProps {
  title: string;
  endDate: string;
  description: string;
  stacks: Array<string>;
}

export interface AccordeonInfoProps {
  info: InfoProps;
  status: CertificateStatus;
  linkTo: string;
}
