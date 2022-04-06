import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeServer } from '../../miragejs/server';
import { store } from '../../Redux/store';

import SingleCertificate from './index';

describe('SingleCertificate > Unit', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    server.timing = 0;
  });

  afterEach(() => {
    server.shutdown();
  });

  const renderComponent = (createCertificates: boolean = false) => {
    if (createCertificates) createCertificatesInServer();
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/certificado/11" replace />} />
            <Route path="/certificado/:id" element={<SingleCertificate />} />
          </Routes>
        </Router>
      </Provider>,
    );
  };

  const createCertificatesInServer = () => {
    server.createList('certificate', 10);
    server.create('certificate', {
      certificateImg: 'FullStack-OneBitCode.pdf',
      courseImg: 'OneBitCode.png',
      imageAlt: 'Certificado OneBitCode',
      info: {
        description:
          'Dolore fugiat adipisicing velit officia amet minim labore ex aute cupidatat eiusmod et reprehenderit. Lorem',
        endDate: '20/03/2022',
        stacks: ['React', 'Node'],
        title: 'Titulo muito grande',
      },
    });
  };

  it('should render the loading', () => {
    renderComponent();

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('should render the buttons to show certificate and go to the course link', async () => {
    renderComponent(true);

    await waitFor(() => {
      expect(screen.getAllByRole('link')).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getByText('Conheça o curso')).toBeInTheDocument();
    });
  });

  it('should render the certificate title', async () => {
    renderComponent(true);

    await waitFor(() => {
      expect(screen.getByText('Titulo muito grande')).toBeInTheDocument();
    });
  });

  it('should render the certificate stacks', async () => {
    renderComponent(true);

    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Node')).toBeInTheDocument();
    });
  });

  it('should render the certificate date', async () => {
    renderComponent(true);

    await waitFor(() => {
      expect(screen.getByText('Recebido em: 20/03/2022')).toBeInTheDocument();
    });
  });
});
