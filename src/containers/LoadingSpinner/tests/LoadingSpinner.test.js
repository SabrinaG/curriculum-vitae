/* eslint-disable import/named */
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../assets/utils/tests.utils';
import LoadingSpinner from '../LoadingSpinner';

describe('contairners.LoadingSpinner tests', () => {
  it('should render LoadingSpinner contairner', () => {
    const strokeColor = 'grey';
    const testColor = 'red';

    renderWithProviders(
      <LoadingSpinner labelColor={testColor} />,
    );

    expect(screen.getByTestId('loading-spinner')).toBeTruthy();
    expect(screen.getByTestId('rotating-lines-svg')).toBeTruthy();
    expect(screen.getByTestId('rotating-lines-svg').getAttribute('stroke')).toEqual(strokeColor);
    expect(screen.getByTestId('spinner-label')).toBeTruthy();
    expect(screen.getByTestId('spinner-label').getAttribute('style')).toEqual(`color: ${testColor};`);
    expect(screen.getAllByText('Loading...')).toBeTruthy();
  });
});
