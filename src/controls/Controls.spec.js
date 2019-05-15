import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Controls from './Controls';
import Dashboard from '../Dashboard/Dashboard';

describe('<Controls />', () => {
  it('should render', () => {
    render(<Controls />);
  })

  describe('Close/Open Gate button', () => {
    it("should provide a button to toggle the 'closed' state", () => {
      const { getByText } = render(<Controls />);
      getByText(/Close Gate/);
    })
    
    it("should toggle the button's text when clicked", () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText(/Close Gate/);
      fireEvent.click(button);
      getByText(/Open Gate/);
      fireEvent.click(button);
      getByText(/Close Gate/);
    })
  })

  describe('Lock/Unlock Gate button', () => {
    it("should provide a button to toggle the 'locked' state", () => {
      const { getByText } = render(<Controls />);
      getByText(/Lock Gate/);
    })
    
    it("should toggle the button's text when clicked", () => {
      const { getByText } = render(<Dashboard />);
      const closeBtn = getByText(/Close Gate/);
      const lockBtn = getByText(/Lock Gate/);
      fireEvent.click(closeBtn);
      fireEvent.click(lockBtn);
      getByText(/Unlock Gate/);
      fireEvent.click(lockBtn);
      getByText(/Lock Gate/);
    })
  })
})
