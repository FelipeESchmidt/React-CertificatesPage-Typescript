import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { name } from '../../Components/Footer/index.constants';
import { makeServer } from '../../miragejs/server';
import { store } from '../../Redux/store';

import CertificateScreen from './index';

describe('CertificateScreen > Integration', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    server.timing = 0;
  });

  afterEach(() => {
    server.shutdown();
  });

  const renderComponent = () => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<CertificateScreen />} />
          </Routes>
        </Router>
      </Provider>,
    );
  };

  it('should render the header', () => {
    renderComponent();

    expect(screen.getByText(/Minhas/i)).toBeInTheDocument();
  });

  it('should render the footer', () => {
    renderComponent();

    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
