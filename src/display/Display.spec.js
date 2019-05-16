import React from 'react';
import renderer from 'react-test-renderer';
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

  describe('Closed', () => {
    it("should display 'Closed' if passed a 'true' closed prop", () => {
      const { getByText } = render(<Display closed={true} />);
      getByText(/Closed/);
    })
  
    it("should use 'red-led' class for 'Closed' if passed a 'true' closed prop", () => {
      const { getByText } = render(<Display closed={true} />);
      const closed = getByText(/Closed/);
      expect(closed.classList).toContain('red-led');
    })
  })

  describe('Open', () => {
    it("should display 'Open' if passed a 'false' closed prop", () => {
      const { getByText } = render(<Display closed={false} />);
      getByText(/Open/);
    })

    it("should use 'green-led' class for 'Open' if passed a 'false' closed prop", () => {
      const { getByText } = render(<Display closed={false} />);
      const closed = getByText(/Open/);
      expect(closed.classList).toContain('green-led');
    })
  })

  describe('Locked', () => {
    it("should display 'Locked' if passed a 'true' locked prop", () => {
      const { getByText } = render(<Display locked={true} />);
      getByText(/Locked/);
    })
  
    it("should use 'red-led' class for 'Locked' if passed a 'true' locked prop", () => {
      const { getByText } = render(<Display locked={true} />);
      const locked = getByText(/Locked/);
      expect(locked.classList).toContain('red-led');
    })
  })

  describe('Unlocked', () => {
    it("should display 'Unlocked' if passed a 'false' locked prop", () => {
      const { getByText } = render(<Display locked={false} />);
      getByText(/Unlocked/);
    })

    it("should use 'green-led' class for 'Unlocked' if passed a 'false' locked prop", () => {
      const { getByText } = render(<Display locked={false} />);
      const locked = getByText(/Unlocked/);
      expect(locked.classList).toContain('green-led');
    })
  })

  describe('Snapshots', () => {
    it('should match Closed/Locked snapshot', () => {
      const tree = renderer.create(<Display closed={true} locked={true} />);
      expect(tree).toMatchSnapshot();
    })

    it('should match Closed/Unlocked snapshot', () => {
      const tree = renderer.create(<Display closed={true} locked={false} />);
      expect(tree).toMatchSnapshot();
    })

    it('should match Open/Locked snapshot', () => {
      const tree = renderer.create(<Display closed={false} locked={true} />);
      expect(tree).toMatchSnapshot();
    })

    it('should match Open/Unlocked snapshot', () => {
      const tree = renderer.create(<Display closed={false} locked={false} />);
      expect(tree).toMatchSnapshot();
    })
  })
})
