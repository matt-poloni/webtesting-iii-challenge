import React from 'react';
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe.skip('<Display />', () => {
  it('should render', () => {
    render(<Display />);
  })
})