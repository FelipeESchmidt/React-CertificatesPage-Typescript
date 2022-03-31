import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../Redux/store';

import Breadcrumb, { buildBreadcrumbLink } from './index';

describe('Breadcrumb > Unit', () => {
  it('should render Breadcrumb with Home', () => {
    render(
      <Provider store={store}>
        <Router>
          <Breadcrumb links={[]} />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('should return a valid LinkProps object when calling buildBreadcrumbLink()', () => {
    const link = buildBreadcrumbLink('Title', 'location');

    expect(link.title).toBeDefined();
    expect(link.title).toBe('Title');
    expect(link.url).toBeDefined();
    expect(link.url).toBe('location');
  });

  it('should render Home and passed Link', () => {
    const link = buildBreadcrumbLink('Title', 'location');

    render(
      <Provider store={store}>
        <Router>
          <Breadcrumb links={[link]} />
        </Router>
      </Provider>,
    );

    const titleLink = screen.getAllByRole('link').pop();

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(titleLink).toHaveAttribute('href', '/location');
  });

  it('should render Home and multiple passed Links', () => {
    const links = Array.from(Array(3)).map((_, i) =>
      buildBreadcrumbLink(`Title${i}`, `location${i}`),
    );

    render(
      <Provider store={store}>
        <Router>
          <Breadcrumb links={links} />
        </Router>
      </Provider>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(links.length + 1);

    links.forEach((_, i) => {
      const titleLink = screen.getAllByRole('link').at(i + 1);

      expect(titleLink).toHaveTextContent(`Title${i}`);
      expect(titleLink).toHaveAttribute('href', `/location${i}`);
    });
  });
});
