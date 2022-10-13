import React from 'react';
import { screen } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import { DisplayLayout } from '../DisplayLayout';

describe('containers.DisplayLayout tests', () => {
  it('should render layout view contairner', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<DisplayLayout />, { store });

    expect(screen.getByTestId('layout')).toBeTruthy();
    expect(screen.getByTestId('personnel')).toBeTruthy();
    expect(screen.getByTestId('gallery')).toBeTruthy();
  });
});
