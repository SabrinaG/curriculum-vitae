import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import ModalMessage from '../ModalMessage';

describe('components.ModalMessage tests', () => {
  const testModalTitle = 'MODAL TITLE';
  const testModalText = 'MODAL TEXT';

  const store = configureTestStore({ });
  const handleCloseSpy = jest.fn();

  it('should render ModalMessage component', () => {
    renderWithProviders(
      <ModalMessage
        modalTitle={testModalTitle}
        modalText={testModalText}
        handleClose={handleCloseSpy}
      />, { store },
    );

    expect(screen.getByTestId('modal-wrapper')).toBeTruthy();
    expect(screen.getByTestId('modal-title')).toBeTruthy();
    expect(screen.getByTestId('close-button')).toBeTruthy();
    expect(screen.getByTestId('modal-text')).toBeTruthy();
  });

  it('should render string elements correctly', () => {
    renderWithProviders(
      <ModalMessage
        modalTitle={testModalTitle}
        modalText={testModalText}
        handleClose={handleCloseSpy}
      />, { store },
    );

    const modalTitle = screen.getByTestId('h1-title');
    expect(modalTitle.textContent).toEqual(testModalTitle);

    const modalText = screen.getByTestId('h3-text');
    expect(modalText.textContent).toEqual(testModalText);
  });

  it('should render empty modal', () => {
    renderWithProviders(
      <ModalMessage
        modalTitle={undefined}
        modalText={undefined}
        handleClose={handleCloseSpy}
      />, { store },
    );

    expect(screen.getByTestId('modal-wrapper')).toBeTruthy();
    expect(screen.getByTestId('modal-title')).toBeTruthy();
    expect(screen.queryByTestId('h1-title')).toBeFalsy();
    expect(screen.getByTestId('close-button')).toBeTruthy();
    expect(screen.getByTestId('modal-text')).toBeTruthy();
    expect(screen.queryByTestId('h3-title')).toBeFalsy();
  });

  it('should call function to handle close upon click close button', () => {
    renderWithProviders(
      <ModalMessage
        modalTitle={testModalTitle}
        modalText={testModalText}
        handleClose={handleCloseSpy}
      />, { store },
    );

    expect(screen.getByTestId('close-button')).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(handleCloseSpy).toHaveBeenCalled();
  });
});
