import { CertificateProps } from '../../Components/Certificate/index.types';

export const filterCertificates = (
  certificatesList: Array<CertificateProps>,
  filterBy: string,
): Array<CertificateProps> => {
  const filteredCertificates = certificatesList.filter((certificate) =>
    JSON.stringify(certificate).toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()),
  );

  return filteredCertificates;
};
