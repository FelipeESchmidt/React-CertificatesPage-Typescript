import { CertificateProps } from '../../Components/Certificate/index.types';
import { CertificateResponseTypes } from './App.types';

export const normalizeCertificates = (
  certificates: [CertificateResponseTypes],
): CertificateProps[] => {
  const certificatesNormalized =
    certificates.map &&
    certificates.map(
      (certificate: CertificateResponseTypes): CertificateProps => ({
        certificateImg: certificate.certificateImg,
        courseImg: certificate.courseImg,
        courseUrl: certificate.courseUrl,
        id: certificate._id,
        imageAlt: certificate.imageAlt,
        info: certificate.info,
      }),
    );
  return certificatesNormalized;
};
