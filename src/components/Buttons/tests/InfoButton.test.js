import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import InfoButton from '../InfoButton';

describe('components.InfoButton tests', () => {
  it('should render InfoButton component', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<InfoButton />, { store });

    expect(screen.getByTestId('about-btn')).toBeTruthy();
    expect(screen.getByTestId('info-icon')).toBeTruthy();
  });

  it('should show modal uppon InfoButton click', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<InfoButton />, { store });

    expect(screen.queryByTestId('modal-wrapper')).toBeFalsy();

    fireEvent.click(screen.getByTestId('about-btn'));

    expect(screen.getByTestId('modal-wrapper')).toBeTruthy();

    fireEvent.click(screen.getByTestId('close-button'));

    expect(screen.queryByTestId('modal-wrapper')).toBeFalsy();
  });
});
