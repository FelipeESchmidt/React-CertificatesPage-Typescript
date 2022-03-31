import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from '../../miragejs/server';
import { store } from '../../Redux/store';

import Certificates from './index';
import { noCertificatesTitle } from './index.constants';

describe('Certificates > Unit', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    server.timing = 0;
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render the loading', () => {
    server.timing = 1000;

    render(
      <Provider store={store}>
        <Router>
          <Certificates />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('should call fetchCertificates action', async () => {
    server.createList('certificate', 8);

    render(
      <Provider store={store}>
        <Router>
          <Certificates />
        </Router>
      </Provider>,
    );

    expect(await screen.findAllByTestId('certificate')).toHaveLength(8);
  });

  it('should show "no certificates" message', (done) => {
    server.createList('certificate', 0);

    render(
      <Provider store={store}>
        <Router>
          <Certificates />
        </Router>
      </Provider>,
    );

    setTimeout(() => {
      expect(screen.queryAllByTestId('certificate')).toHaveLength(0);
      expect(screen.getByText(noCertificatesTitle)).toBeInTheDocument();
      done();
    }, 10);
  });
});
