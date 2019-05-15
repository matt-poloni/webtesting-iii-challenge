import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render', () => {
    render(<Dashboard />);
  })

  it('should display <Controls />', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/locked/i);
  })

  it('should display <Display />', () => {
    const { getByText } = render(<Dashboard />);
    getByText(/gate/i);
  })
})
