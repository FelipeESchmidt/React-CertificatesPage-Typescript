import axios from 'axios';
import { CertificateProps } from '../Components/Certificate/index.types';
import { getBaseUrl } from './baseUrl';

const baseUrl = getBaseUrl();

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
}
