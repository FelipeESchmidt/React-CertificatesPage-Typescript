import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeServer } from '../../miragejs/server';
import { store } from '../../Redux/store';

import SingleCertificate from './index';

const id = 'oa9af7ai7ym1ynt3pq4aedan';

describe('SingleCertificate > Unit', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    server.timing = 0;
  });

  afterEach(() => {
    server.shutdown();
  });

  const renderComponent = (createCertificates: boolean = false, overrides: any = {}) => {
    if (createCertificates) createCertificatesInServer(overrides);
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to={`/certificado/${id}`} replace />} />
            <Route path="/certificado/:id" element={<SingleCertificate />} />
          </Routes>
        </Router>
      </Provider>,
    );
  };

  const createCertificatesInServer = (overrides: any) => {
    server.createList('certificate', 10);
    server.create('certificate', {
      _id: id,
      certificateImg: 'FullStack-OneBitCode.pdf',
      courseImg: 'OneBitCode.png',
      imageAlt: 'Certificado OneBitCode',
      description:
        'Dolore fugiat adipisicing velit officia amet minim labore ex aute cupidatat eiusmod et reprehenderit. Lorem',
      endDate: '20/03/2022',
      stacks: ['React', 'Node'],
      title: 'Titulo muito grande',
      percentage: 100,
      ...overrides,
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

  fit('should display "Em desenvolvimento" when status is not complete', async () => {
    const percentage = 30;
    renderComponent(true, { percentage });

    await waitFor(() => {
      expect(screen.getByText(`Em desenvolvimento: ${percentage}%`)).toBeInTheDocument();
    });
  });
});
