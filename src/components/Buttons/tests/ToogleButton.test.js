import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ResumeContext from '../../../context/ResumeContext';
import resumeContextData from '../../../assets/mocks/resumeContextData';
import ToogleButton from '../ToogleButton';

describe('components.ToogleButton tests', () => {
  function ComponentWithContext({ resumeContextOverride }) {
    const resumeContextMock = { ...resumeContextData, ...resumeContextOverride };

    return (
      <ResumeContext.Provider value={resumeContextMock}>
        <ToogleButton />
      </ResumeContext.Provider>
    );
  }

  it('should render ToogleButton component', () => {
    render(ComponentWithContext({}));
    expect(screen.getByTestId('toogle-btn darkTheme')).toBeTruthy();
  });

  it('should render ToogleButton with correct theme', () => {
    const { rerender } = render(ComponentWithContext({}));

    expect(screen.getByTestId('toogle-btn darkTheme')).toBeTruthy();

    rerender(<ComponentWithContext resumeContextOverride={{ selectedTheme: 'lightTheme' }} />);

    expect(screen.getByTestId('toogle-btn lightTheme')).toBeTruthy();
  });

  it('should call toogleSelectedTheme uppon ToogleButton click', () => {
    render(ComponentWithContext({}));

    expect(screen.getByTestId('toogle-btn darkTheme')).toBeTruthy();

    expect(resumeContextData.toogleSelectedTheme).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByTestId('toogle-btn darkTheme'));

    expect(resumeContextData.toogleSelectedTheme).toHaveBeenCalledTimes(1);
  });
});
