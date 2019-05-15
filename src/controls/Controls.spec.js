import React from 'react';
import renderer from 'react-test-renderer';
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
      const button = getByText(/Close Gate/);
      const lockBtn = getByText(/Unlock Gate/);
      expect(button.disabled).toBe(true);
    })
    
    it("should not fire the onClick event when clicked if passed a 'true' locked prop", () => {
      const spy = jest.fn();
      const { getByText } = render(<Controls locked={true} toggleLocked={spy} />);
      const button = getByText(/Close Gate/);
      fireEvent.click(button);
      expect(spy).not.toHaveBeenCalled();
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
      const button = getByText(/Lock Gate/);
      expect(button.disabled).toBe(true);
    })

    it("should not fire the onClick event when clicked if passed a 'false' closed prop", () => {
      const spy = jest.fn();
      const { getByText } = render(<Controls closed={false} toggleLocked={spy} />);
      const button = getByText(/Lock Gate/);
      fireEvent.click(button);
      expect(spy).not.toHaveBeenCalled();
    })

    it("should toggle the button's text when clicked", () => {
      const { getByText } = render(<Dashboard />);
      const closeBtn = getByText(/Close Gate/);
      const button = getByText(/Lock Gate/);
      fireEvent.click(closeBtn);
      fireEvent.click(button);
      getByText(/Unlock Gate/);
      fireEvent.click(button);
      getByText(/Lock Gate/);
    })
  })

  describe('Snapshots', () => {
    it('should match Closed/Locked snapshot', () => {
      const tree = renderer.create(<Controls closed={true} locked={true} toggleLocked={()=>{}} toggleClosed={()=>{}} />);
      expect(tree).toMatchSnapshot();
    })

    it('should match Closed/Unlocked snapshot', () => {
      const tree = renderer.create(<Controls closed={true} locked={false} toggleLocked={()=>{}} toggleClosed={()=>{}} />);
      expect(tree).toMatchSnapshot();
    })

    it('should match Open/Locked snapshot', () => {
      const tree = renderer.create(<Controls closed={false} locked={true} toggleLocked={()=>{}} toggleClosed={()=>{}} />);
      expect(tree).toMatchSnapshot();
    })

    it('should match Open/Unlocked snapshot', () => {
      const tree = renderer.create(<Controls closed={false} locked={false} toggleLocked={()=>{}} toggleClosed={()=>{}} />);
      expect(tree).toMatchSnapshot();
    })
  })
})
