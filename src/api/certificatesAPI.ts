import axios from 'axios';
import { CertificateProps } from '../Components/Certificate/index.types';

// import { certificatesMock } from "./certificatesMock";

const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://my-fs-backend-blog.herokuapp.com' : '';

const headers = {
  Accept: 'application/json',
};

export async function getCertificates() {
  return new Promise<CertificateProps[]>((resolve, reject) => {
    axios
      .get(`${baseUrl}/api/certificates`, { headers })
      .then((response) => response.data)
      .then((data) => resolve(data.certificates))
      .catch(reject);
  });
  // return certificatesMock;
}
