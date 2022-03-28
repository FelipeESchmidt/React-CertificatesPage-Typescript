import { AnyAction } from "redux";
import { ThemeModes } from "../../Theme/index.theme";
import * as types from "./App.types";

const swapMode = (state: types.AppTypes): ThemeModes =>
  state.mode === "dark" ? "light" : "dark";

const defaultAlert: types.AppTypes = {
  certificates: [],
  loading: false,
  search: "",
  mode: "dark",
};

export default function reducer(
  state: types.AppTypes = { ...defaultAlert },
  action: AnyAction
): types.AppTypes {
  switch (action.type) {
    case types.SET_SEARCH: {
      return { ...state, search: action.search };
    }

    case types.CHANGE_MODE: {
      return { ...state, mode: swapMode(state) };
    }

    case types.CERTIFICATES_LOAD: {
      return { ...state, loading: true };
    }

    case types.CERTIFICATES_LOADED: {
      return { ...state, certificates: action.certificates, loading: false };
    }

    default: {
      return state;
    }
  }
}
