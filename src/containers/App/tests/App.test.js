import '@testing-library/jest-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import { ResumeProvider } from '../../../context/ResumeContext';
import App from '../App';

describe('containers.App tests', () => {
  it('should Suspense Loading Spinner on rendering App', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><App /></ResumeProvider>, { store });

    expect(screen.getByTestId('spinner-label')).toBeTruthy();
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('should render react app contairner', async () => {
    const store = configureTestStore({ ...mockStore });

    await act(async () => {
      renderWithProviders(<ResumeProvider><App /></ResumeProvider>, { store });
    });

    expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
    expect(screen.getByText(/LINKS/i)).toBeInTheDocument();
    expect(screen.getByText(/LANGUAGES/i)).toBeInTheDocument();
    expect(screen.getByText(/HOBBIES/i)).toBeInTheDocument();
    expect(screen.getByText(/EXPERIENCE/i)).toBeInTheDocument();
    expect(screen.getByText(/INTERNSHIP/i)).toBeInTheDocument();
    expect(screen.getByText(/EDUCATION/i)).toBeInTheDocument();
    expect(screen.getByText(/SKILLS/i)).toBeInTheDocument();
  });
});
