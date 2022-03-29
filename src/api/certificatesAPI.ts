// import { certificatesMock } from "./certificatesMock";

import { CertificateProps } from '../Components/Certificate/index.types';

const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://my-fs-backend-blog.herokuapp.com' : '';

const headers = {
  Accept: 'application/json',
};

export async function getCertificates() {
  return new Promise<CertificateProps[]>((resolve, reject) => {
    fetch(`${baseUrl}/api/certificates`, { headers })
      .then((response) => response.json())
      .then((data) => resolve(data.certificates))
      .catch(reject);
  });
  // return certificatesMock;
}
