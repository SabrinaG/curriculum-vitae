import React from 'react';
import { screen, render } from '@testing-library/react';
import UrlFrame from '../Frame';

describe('components.UrlFrame tests', () => {
  it('should render UrlFrame component', () => {
    render(<UrlFrame />);
    expect(screen.getByTestId('url-frame')).toBeTruthy();
  });
});
