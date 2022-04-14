import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { makeServer } from '../../miragejs/server';
import { normalizeCertificates } from '../../Redux/App/App.normalizer';
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
    server.delete('certificate');
  });

  const renderComponent = (percentage: number = 100) => {
    let certificate = createCertificatesInServer(percentage);
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<SingleCertificate certificate={certificate} />} />
          </Routes>
        </Router>
      </Provider>,
    );
  };

  const createCertificatesInServer = (percentage: number) => {
    const createdCertificated = server.create('certificate', {
      _id: 'oa9af7ai7ym1ynt3pq4aedan',
      certificateImg: 'FullStack-OneBitCode.pdf',
      courseImg: 'OneBitCode.png',
      imageAlt: 'Certificado OneBitCode',
      description:
        'Dolore fugiat adipisicing velit officia amet minim labore ex aute cupidatat eiusmod et reprehenderit. Lorem',
      endDate: '20/03/2022',
      stacks: ['React', 'Node'],
      title: 'Titulo muito grande',
      percentage,
    });
    return normalizeCertificates([createdCertificated])[0];
  };

  it('should the breadcrumb', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText(/Home/i)).toBeInTheDocument();
    });
  });

  it('should render the buttons to show certificate and go to the course link', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('knowTheCourse')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByTestId('certificate')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Conheça o curso')).toBeInTheDocument();
    });
  });

  it('should render the certificate title', async () => {
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText('Titulo muito grande')).toBeInTheDocument();
    });
  });

  it('should render the certificate stacks', async () => {
    renderComponent();

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
    renderComponent();

    await waitFor(() => {
      expect(screen.getByText('Recebido em: 20/03/2022')).toBeInTheDocument();
    });
  });

  it('should display "Em desenvolvimento" when status is not complete', async () => {
    renderComponent(30);

    await waitFor(() => {
      expect(screen.getByText('Em desenvolvimento: 30%')).toBeInTheDocument();
    });
  });
});
