import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { makeServer } from '../../miragejs/server';
import { store } from '../../Redux/store';

import Certificate from './index';
import { CertificateProps } from './index.types';

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
    let certificate: CertificateProps = server.create('certificate');
    certificate.info.title = certificateInfo.title;
    certificate.info.description = certificateInfo.description;

    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Certificate
                  id={certificate.id}
                  fileSrc={certificate.fileSrc}
                  courseUrl={certificate.courseUrl}
                  imageAlt={certificate.imageAlt}
                  imageSrc={certificate.imageSrc}
                  info={certificate.info}
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
    let certificate: CertificateProps = server.create('certificate');
    certificate.info.endDate = certificateInfo.endDate;

    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Certificate
                  id={certificate.id}
                  fileSrc={certificate.fileSrc}
                  courseUrl={certificate.courseUrl}
                  imageAlt={certificate.imageAlt}
                  imageSrc={certificate.imageSrc}
                  info={certificate.info}
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
    let certificate: CertificateProps = server.create('certificate');
    certificate.info.stacks = certificateInfo.stacks;

    render(
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Certificate
                  id={certificate.id}
                  fileSrc={certificate.fileSrc}
                  courseUrl={certificate.courseUrl}
                  imageAlt={certificate.imageAlt}
                  imageSrc={certificate.imageSrc}
                  info={certificate.info}
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
});
