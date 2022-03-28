import { ThemeModes } from "../../Theme/index.theme";

export const SET_SEARCH = "@app/SET_SEARCH";
export const CHANGE_MODE = "@app/CHANGE_MODE";
export const CERTIFICATES_LOAD = "@app/CERTIFICATES_LOAD";
export const CERTIFICATES_LOADED = "@app/CERTIFICATES_LOADED";

export interface AppTypes {
  certificates: Array<any>;
  loading: boolean;
  search: string;
  mode: ThemeModes;
}
