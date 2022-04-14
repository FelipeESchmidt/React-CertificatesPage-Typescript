import { CertificateProps } from '../../Components/Certificate/index.types';
import { CertificateResponseTypes } from './App.types';

const isComplete = (percentage: number): boolean => percentage === 100;

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
        info: {
          description: certificate.description,
          endDate: certificate.endDate,
          stacks: certificate.stacks,
          title: certificate.title,
        },
        status: {
          complete: isComplete(certificate.percentage),
          percentage: certificate.percentage,
        },
      }),
    );
  return certificatesNormalized;
};
