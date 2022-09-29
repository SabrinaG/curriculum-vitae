import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../assets/utils/tests.utils';
import ErrorBoundary from '../ErrorBoundary';

describe('contairners.ErrorBoundary tests', () => {
  it('should render ErrorBoundary contairner', () => {
    const testError = 'Fail to render';
    const testString = 'test component child';

    const Child = () => { throw new Error(testError); };

    renderWithProviders(
      <ErrorBoundary component={testString}>
        <Child />
      </ErrorBoundary>,
    );

    const errorMessage = screen.getByTestId('error-boundary-message').innerHTML;
    expect(errorMessage).toBe(`${testError} ${testString}.`);
  });
});
