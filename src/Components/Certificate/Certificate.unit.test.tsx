import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeServer } from '../../miragejs/server';
import { store } from '../../Redux/store';

import Certificate from './index';
import { CertificateResponseTypes } from '../../Redux/App/App.types';

describe('Certificate > Unit', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    server.timing = 0;
  });

  afterEach(() => {
    server.shutdown();
  });

  const renderCertificate = (store: any, certificate: any) => {
    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Certificate
                  id={certificate._id}
                  certificateImg={certificate.certificateImg}
                  courseUrl={certificate.courseUrl}
                  imageAlt={certificate.imageAlt}
                  courseImg={certificate.courseImg}
                  info={{
                    description: certificate.description,
                    endDate: certificate.endDate,
                    stacks: certificate.stacks,
                    title: certificate.title,
                  }}
                  status={{
                    percentage: certificate.percentage,
                    complete: certificate.percentage === 100,
                  }}
                />
              }
            />
          </Routes>
        </Router>
      </Provider>,
    );
  };

  it('should render title and description', () => {
    const certificateInfo = {
      title: 'Certificado muito bom',
      description: 'Descrição muito boa',
    };
    let certificate: CertificateResponseTypes = server.create('certificate', {
      ...certificateInfo,
    });

    renderCertificate(store, certificate);

    expect(screen.getByText(certificateInfo.title)).toBeInTheDocument();
    expect(screen.getByText(certificateInfo.description)).toBeInTheDocument();
  });

  it('should render endDate if complete', () => {
    const certificateInfo = {
      endDate: new Date().toLocaleDateString(),
      percentage: 100,
    };
    let certificate: CertificateResponseTypes = server.create('certificate', {
      ...certificateInfo,
    });

    renderCertificate(store, certificate);

    expect(screen.getByText(`Recebido em: ${certificateInfo.endDate}`)).toBeInTheDocument();
  });

  it('should not render endDate if not complete', () => {
    const certificateInfo = {
      endDate: new Date().toLocaleDateString(),
      percentage: 88,
    };
    let certificate: CertificateResponseTypes = server.create('certificate', {
      ...certificateInfo,
    });

    renderCertificate(store, certificate);

    expect(screen.queryByText(`Recebido em: ${certificateInfo.endDate}`)).not.toBeInTheDocument();
  });

  it('should render stacks correctly', () => {
    const certificateInfo = {
      stacks: ['Stack 1', 'Stack 2', 'Stack 3'],
    };
    let certificate: CertificateResponseTypes = server.create('certificate', {
      ...certificateInfo,
    });

    renderCertificate(store, certificate);

    certificateInfo.stacks.map((stack) => expect(screen.getByText(stack)).toBeInTheDocument());
    expect(screen.getAllByRole('listitem')).toHaveLength(certificateInfo.stacks.length);
  });

  it('should render percentage number', () => {
    let certificate: CertificateResponseTypes = server.create('certificate', {
      percentage: 70,
    });

    renderCertificate(store, certificate);

    expect(screen.getByTestId('percentage')).toBeInTheDocument();
  });
});
