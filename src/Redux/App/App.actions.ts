import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { getCertificates } from '../../api/certificatesAPI';
import { CertificateProps } from '../../Components/Certificate/index.types';
import { normalizeCertificates } from './App.normalizer';
import * as types from './App.types';

export const setSearch = (search: string) => ({
  type: types.SET_SEARCH,
  search,
});

export const changeThemeMode = () => ({
  type: types.CHANGE_MODE,
});

const startRequest = () => ({
  type: types.CERTIFICATES_LOAD,
});

const certificatesLoaded = (certificates: Array<CertificateProps>) => ({
  type: types.CERTIFICATES_LOADED,
  certificates,
});

const certificatesLoadedWithError = () => ({
  type: types.CERTIFICATES_LOADED_WITH_ERROR,
});

export async function fetchCertificates(dispatch: ThunkDispatch<{}, {}, AnyAction>) {
  dispatch(startRequest());
  getCertificates()
    .then((response: any) => normalizeCertificates(response))
    .then((certificates) => dispatch(certificatesLoaded(certificates)))
    .catch(() => dispatch(certificatesLoadedWithError()));
}
