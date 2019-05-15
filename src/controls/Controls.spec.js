import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';

describe('<Controls />', () => {
  it('should render', () => {
    render(<Controls />);
  })

  describe('Close/Open Gate button', () => {
    it("should provide a button to toggle the 'closed' state", () => {
      const { getByText } = render(<Controls />);
      getByText(/Close Gate/);
    })

  })

  describe('Lock/Unlock Gate button', () => {
    it("should provide a button to toggle the 'locked' state", () => {
      const { getByText } = render(<Controls />);
      getByText(/Lock Gate/);
    })

  })
})
