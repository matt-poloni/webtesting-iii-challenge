import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
  it('should render', () => {
    render(<Display />);
  })

  it('should default to unlocked', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
  })

  it('should default to open', () => {
    const { getByText } = render(<Display />);
    getByText(/open/i);
  })
})