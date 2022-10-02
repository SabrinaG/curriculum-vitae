import React from 'react';
import { screen } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import Gallery from '../Gallery';

describe('components.Gallery tests', () => {
  it('should render Personnel component', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Gallery />, { store });

    expect(screen.getByTestId('gallery-container')).toBeTruthy();
  });
});
