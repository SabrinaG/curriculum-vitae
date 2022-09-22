/* eslint-disable import/named */
import { screen } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import { ResumeProvider } from '../../../context/ResumeContext';
import Layout from '../Layout';

describe('containers.Layout tests', () => {
  it('should render layout view contairner', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><Layout /></ResumeProvider>, { store });

    expect(screen.getByTestId('layout')).toBeTruthy();
    expect(screen.getByTestId('personnel')).toBeTruthy();
    expect(screen.getByTestId('professional')).toBeTruthy();
  });
});