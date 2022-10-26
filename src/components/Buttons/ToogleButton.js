import React from 'react';
import { useResumeContext } from '../../context/ResumeContext';
import { ThemesOptions } from '../../assets/themes/constants';
import { SwitchBtn, SwitchIcon } from './Buttons.styled';

function ToogleButton() {
  const resumeContext = useResumeContext();

  const getThemeIcon = () => {
    switch (resumeContext.selectedTheme) {
      case ThemesOptions.LIGHT:
        return <SwitchIcon className="material-icons dark-mode-icon"> dark_mode </SwitchIcon>;
      case ThemesOptions.DARK:
        return <SwitchIcon className="material-icons light-mode-icon"> light_mode </SwitchIcon>;
      default:
        return <SwitchIcon className="material-icons dark-mode-icon"> dark_mode </SwitchIcon>;
    }
  };

  return (
    <SwitchBtn
      onClick={() => resumeContext.toogleSelectedTheme()}
      type="button"
      title="toogle theme"
      data-testid={`toogle-btn ${resumeContext.selectedTheme}`}
    >
      {getThemeIcon()}
    </SwitchBtn>
  );
}

export default ToogleButton;
