import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import App from "./Screens/App";
import { store } from "./Redux/store";
import GlobalStyle from "./Styles/GlobalStyles";
import { fetchCertificates } from "./Redux/App/App.actions";

const thunkDispatch = store.dispatch as ThunkDispatch<{}, {}, AnyAction>;
thunkDispatch(fetchCertificates);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
