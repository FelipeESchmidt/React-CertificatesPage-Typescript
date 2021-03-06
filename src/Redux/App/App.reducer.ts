import { AnyAction } from 'redux';
import { ThemeModes } from '../../Theme/index.theme';
import * as types from './App.types';
import { filterCertificates } from './App.utils';

const swapMode = (state: types.AppTypes): ThemeModes => (state.mode === 'dark' ? 'light' : 'dark');

const defaultAlert: types.AppTypes = {
  allCertificates: [],
  certificates: [],
  loading: false,
  search: '',
  mode: 'dark',
};

export default function reducer(
  state: types.AppTypes = { ...defaultAlert },
  action: AnyAction,
): types.AppTypes {
  switch (action.type) {
    case types.SET_SEARCH: {
      const filteredCertificates = !!action.search
        ? filterCertificates(state.allCertificates, action.search)
        : state.allCertificates;
      return { ...state, search: action.search, certificates: filteredCertificates };
    }

    case types.CHANGE_MODE: {
      return { ...state, mode: swapMode(state) };
    }

    case types.CERTIFICATES_LOAD: {
      return { ...state, loading: true };
    }

    case types.CERTIFICATES_LOADED: {
      return {
        ...state,
        certificates: action.certificates,
        allCertificates: action.certificates,
        loading: false,
      };
    }

    case types.CERTIFICATES_LOADED_WITH_ERROR: {
      return { ...state, loading: false };
    }

    default: {
      return state;
    }
  }
}
