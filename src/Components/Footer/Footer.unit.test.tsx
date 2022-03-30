import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../Redux/store';

import Footer from './index';
import { name, links } from './index.constants';

describe('Footer > Unit', () => {
  it('should render Footer', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it('should render Links', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    expect(screen.queryAllByRole('link')).toHaveLength(Object.values(links).length);
  });
});
