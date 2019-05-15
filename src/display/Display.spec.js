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

  it("should display 'Closed' if passed a 'true' closed prop", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/Closed/);
  })

  it("should display 'Open' if passed a 'false' closed prop", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/Open/);
  })

  it("should display 'Locked' if passed a 'true' locked prop", () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/Locked/);
  })

  it("should display 'Unlocked' if passed a 'false' locked prop", () => {
    const { getByText } = render(<Display locked={false} />);
    getByText(/Unlocked/);
  })
})