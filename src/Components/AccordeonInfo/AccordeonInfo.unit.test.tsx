import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { makeServer } from '../../miragejs/server';
import { store } from '../../Redux/store';

import AccordeonInfo from './index';

describe('AccordeonInfo > Unit', () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: 'test' });
    server.timing = 0;
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should render title and icon to open', async () => {
    const { info, status } = server.create('certificate');
    render(
      <Provider store={store}>
        <Router>
          <AccordeonInfo info={info} status={status} linkTo="" />
        </Router>
      </Provider>,
    );

    expect(await screen.findByTestId('open-info')).toBeInTheDocument();

    expect(await screen.findByText(info.title)).toBeInTheDocument();
  });

  it('should toggle when handleToggleInfo() is called', async () => {
    const { info, status } = server.create('certificate');
    render(
      <Provider store={store}>
        <Router>
          <AccordeonInfo info={info} status={status} linkTo="" />
        </Router>
      </Provider>,
    );

    const button = await screen.findByTestId('open-info');

    userEvent.click(button);

    expect(screen.queryByTestId('open-info')).not.toBeInTheDocument();
    expect(await screen.findByTestId('close-info')).toBeInTheDocument();
  });

  it('should toggle while handleToggleInfo() is being called', async () => {
    const { info, status } = server.create('certificate');
    render(
      <Provider store={store}>
        <Router>
          <AccordeonInfo info={info} status={status} linkTo="" />
        </Router>
      </Provider>,
    );

    expect(await screen.findByTestId('open-info')).toBeInTheDocument();
    userEvent.click(await screen.findByTestId('open-info'));
    expect(await screen.findByTestId('close-info')).toBeInTheDocument();
    userEvent.click(await screen.findByTestId('close-info'));
    expect(await screen.findByTestId('open-info')).toBeInTheDocument();
  });
});
