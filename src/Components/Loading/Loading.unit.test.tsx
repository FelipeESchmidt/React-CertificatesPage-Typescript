import 'jest-styled-components';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../Redux/store';

import Loading from './index';

describe('Loading > Unit', () => {
  it('should render loading', () => {
    render(
      <Provider store={store}>
        <Loading />
      </Provider>,
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('should increment dotsControl after 500ms', async () => {
    render(
      <Provider store={store}>
        <Loading />
      </Provider>,
    );

    expect(screen.getAllByTestId('dots')).toHaveLength(1);

    await waitFor(() => {
      expect(screen.getAllByTestId('dots')).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('dots')).toHaveLength(3);
    });
  });

  it('should decrement to 1 dotControl after max achive', async () => {
    render(
      <Provider store={store}>
        <Loading />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getAllByTestId('dots')).toHaveLength(2);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('dots')).toHaveLength(3);
    });

    await waitFor(() => {
      expect(screen.getAllByTestId('dots')).toHaveLength(1);
    });
  });
});
