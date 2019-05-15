import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render', () => {
    render(<Dashboard />);
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
  });

  it('should display <Display />', () => {
    const { getByText } = render(<Dashboard />);
    const display = getByText(/locked/i).parentElement;
    expect(display.className).toBe('display panel');
  })

  it('should display <Controls />', () => {
    const { getByText } = render(<Dashboard />);
    const controls = getByText(/gate/i).parentElement;
    expect(controls.className).toBe('controls panel');
  })
})
