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

  it('should render title and description', () => {
    const certificateInfo = {
      title: 'Certificado muito bom',
      description: 'Descrição muito boa',
    };
    let certificate: CertificateResponseTypes = server.create('certificate');
    certificate.title = certificateInfo.title;
    certificate.description = certificateInfo.description;

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
                  status={{ complete: false, percentage: certificate.percentage }}
                />
              }
            />
          </Routes>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(certificateInfo.title)).toBeInTheDocument();
    expect(screen.getByText(certificateInfo.description)).toBeInTheDocument();
  });

  it('should render endDate', () => {
    const certificateInfo = {
      endDate: new Date().toLocaleDateString(),
    };
    let certificate: CertificateResponseTypes = server.create('certificate');
    certificate.endDate = certificateInfo.endDate;

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
                  status={{ complete: false, percentage: certificate.percentage }}
                />
              }
            />
          </Routes>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`Recebido em: ${certificateInfo.endDate}`)).toBeInTheDocument();
  });

  it('should render stacks correctly', () => {
    const certificateInfo = {
      stacks: ['Stack 1', 'Stack 2', 'Stack 3'],
    };
    let certificate: CertificateResponseTypes = server.create('certificate');
    certificate.stacks = certificateInfo.stacks;

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
                  status={{ complete: false, percentage: certificate.percentage }}
                />
              }
            />
          </Routes>
        </Router>
      </Provider>,
    );

    certificateInfo.stacks.map((stack) => expect(screen.getByText(stack)).toBeInTheDocument());
    expect(screen.getAllByRole('listitem')).toHaveLength(certificateInfo.stacks.length);
  });

  fit('should render percentage number', () => {
    let certificate: CertificateResponseTypes = server.create('certificate');
    certificate.percentage = 70;

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
                  status={{ complete: false, percentage: certificate.percentage }}
                />
              }
            />
          </Routes>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(70)).toBeInTheDocument();
  });
});
