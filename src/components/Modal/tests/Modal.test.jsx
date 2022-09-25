/* eslint-disable import/named */
import { screen, fireEvent } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import DescriptionModal from '../Modal';

describe('components.DescriptionModal tests', () => {
  const testModalTitle = 'MODAL TITLE';
  const testModalText = 'MODAL TEXT';
  
  const store = configureTestStore({ });
  const handleCloseSpy = jest.fn();

  it('should render DescriptionModal component', () => {
    renderWithProviders(
      <DescriptionModal
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
      <DescriptionModal
        modalTitle={testModalTitle}
        modalText={testModalText}
        handleClose={handleCloseSpy}
      />, { store },
    );

    const modalTitle = screen.getByTestId('h1-title');
    expect(modalTitle).toHaveTextContent(testModalTitle);

    const modalText = screen.getByTestId('h3-text');
    expect(modalText).toHaveTextContent(testModalText);
  });

  it('should render empty modal', () => {
    renderWithProviders(
      <DescriptionModal
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
      <DescriptionModal
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
