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
      const button = getByText(/Close Gate/);
      expect(button.nodeName).toBe('BUTTON');
    })

    it("should be disabled if passed a 'true' locked prop", () => {
      const { getByText } = render(<Controls locked={true} />);
      const closeBtn = getByText(/Close Gate/);
      const lockBtn = getByText(/Unlock Gate/);
      expect(closeBtn.disabled).toBe(true);
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
      const button = getByText(/Lock Gate/);
      expect(button.nodeName).toBe('BUTTON');
    })
    
    it("should be disabled if passed a 'false' closed prop", () => {
      const { getByText } = render(<Controls closed={false} />);
      const closeBtn = getByText(/Close Gate/);
      const lockBtn = getByText(/Lock Gate/);
      expect(lockBtn.disabled).toBe(true);
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
