import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import ModalFrame from '../ModalFrame';

describe('components.ModalFrame tests', () => {
  const store = configureTestStore({ });
  const handleCloseSpy = jest.fn();

  it('should render ModalFrame component', () => {
    renderWithProviders(<ModalFrame handleClose={handleCloseSpy} />, { store });

    expect(screen.getByTestId('modal-wrapper')).toBeTruthy();
    expect(screen.getByTestId('modal-header')).toBeTruthy();
    expect(screen.getByTestId('fullscreen-icon-button')).toBeTruthy();
    expect(screen.getByTestId('full-screen')).toBeTruthy();
    expect(screen.getByTestId('full-screen-button')).toBeTruthy();
    expect(screen.getByTestId('close-icon-buttons')).toBeTruthy();
    expect(screen.getByTestId('close-button')).toBeTruthy();
    expect(screen.getByTestId('modal-text')).toBeTruthy();
  });

  it('should have full screen button', () => {
    renderWithProviders(<ModalFrame handleClose={handleCloseSpy} />, { store });

    const element = screen.getByTestId('full-screen-button');
    expect(element).toBeTruthy();
    expect(element.href).toBeDefined();
    expect(element.getAttribute('target')).toEqual('_blank');
    expect(element.getAttribute('rel')).toEqual('noreferrer');

    expect(screen.getByTestId('full-screen-button')).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(handleCloseSpy).not.toHaveBeenCalled();
  });

  it('should call function to handle close upon click close button', () => {
    renderWithProviders(<ModalFrame handleClose={handleCloseSpy} />, { store });

    expect(screen.getByTestId('close-button')).toBeTruthy();
    fireEvent.click(screen.getAllByRole('button')[1]);

    expect(handleCloseSpy).toHaveBeenCalled();
  });
});
