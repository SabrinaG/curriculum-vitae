/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { LightTheme, DarkTheme } from '../assets/themes/Themes.styled';
import { ThemesOptions, PersonnelInfo } from '../assets/themes/constants';

const ResumeContext = createContext();

export const useResumeDefaultContext = () => {
  const jsonData = require('../assets/mocks/linkedin.json');

  const [selectedTheme, setSelectedTheme] = useState(ThemesOptions.LIGHT);
  const [name, setName] = useState(`${jsonData.firstName} ${jsonData.lastName}`);
  const [role, setRole] = useState(PersonnelInfo.ROLE);

  const toogleSelectedTheme = () => {
    switch (selectedTheme) {
      case ThemesOptions.LIGHT:
        setSelectedTheme(ThemesOptions.DARK);
        break;
      case ThemesOptions.DARK:
        setSelectedTheme(ThemesOptions.LIGHT);
        break;
      default:
        setSelectedTheme(ThemesOptions.LIGHT);
        break;
    }
  };

  const getSelectedTheme = () => {
    switch (selectedTheme) {
      case ThemesOptions.LIGHT:
        return LightTheme;
      case ThemesOptions.DARK:
        return DarkTheme;
      default:
        return LightTheme;
    }
  };

  return {
    toogleSelectedTheme,
    getSelectedTheme,
    selectedTheme,
    setSelectedTheme,
    name,
    setName,
    role,
    setRole,
  };
};
export function ResumeProvider({ children }) {
  const context = useResumeDefaultContext();
  return (
    <ResumeContext.Provider value={context}>
      {children}
    </ResumeContext.Provider>
  );
}

ResumeProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default ResumeContext;
export const useResumeContext = () => useContext(ResumeContext);
