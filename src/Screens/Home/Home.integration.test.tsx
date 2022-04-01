import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeServer } from '../../miragejs/server';
import { name } from '../../Components/Footer/index.constants';
import { store } from '../../Redux/store';

import HomeScreen from './index';

describe('HomeScreen > Integration', () => {
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
        <HomeScreen />
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
