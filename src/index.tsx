import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Screens/App';
import { store } from './Redux/store';
import GlobalStyle from './Styles/GlobalStyles';

if (window.location.port === '3000') {
  require('./miragejs/server').makeServer();
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root'),
);
