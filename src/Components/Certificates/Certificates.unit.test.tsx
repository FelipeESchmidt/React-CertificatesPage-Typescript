import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { makeServer } from '../../miragejs/server';
import { setSearch } from '../../Redux/App/App.actions';
import { store } from '../../Redux/store';
import { CertificateProps } from '../Certificate/index.types';

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

  fit('should filter certificates after typing term on input', (done) => {
    const stack = 'React with Redux';
    server.createList('certificate', 9);
    let certificate: CertificateProps = server.create('certificate');
    certificate.info.stacks = [stack];

    render(
      <Provider store={store}>
        <Router>
          <Certificates />
        </Router>
      </Provider>,
    );

    setTimeout(() => {
      expect(screen.queryAllByTestId('certificate')).toHaveLength(10);
      store.dispatch(setSearch(stack));
      expect(screen.queryAllByTestId('certificate')).toHaveLength(1);
      store.dispatch(setSearch(''));
      expect(screen.queryAllByTestId('certificate')).toHaveLength(10);
      done();
    }, 10);
  });
});
