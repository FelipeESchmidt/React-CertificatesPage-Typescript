import { waitFor } from '@testing-library/react';
import * as API from '../../api/certificatesAPI';
import { makeServer } from '../../miragejs/server';
import { store } from '../store';
import { fetchCertificates } from './App.actions';
import * as normalizer from './App.normalizer';
import { normalizeCertificates } from './App.normalizer';

describe('Redux > App', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should add to allCertificates what getCertificates() return normalized', async () => {
    const createdCertificate = server.create('certificate');
    const certificate = normalizeCertificates([createdCertificate])[0];

    jest.spyOn(API, 'getCertificates').mockResolvedValue([createdCertificate]);
    jest.spyOn(normalizer, 'normalizeCertificates');

    fetchCertificates(store.dispatch);

    await waitFor(() => {
      expect(store.getState().app.allCertificates).toEqual([certificate]);
    });

    await waitFor(() => {
      expect(normalizeCertificates).toBeCalledTimes(1);
    });
  });

  it('should error when getCertificates() return error', async () => {
    jest.spyOn(API, 'getCertificates').mockRejectedValueOnce('Erro');

    fetchCertificates(store.dispatch);

    await waitFor(() => {
      expect(store.getState().app.loading).toBe(false);
    });
  });
});
