import React, { useState, createContext, useContext } from 'react';
import { PersonnelInfo } from '../assets/constants';
import PropTypes from 'prop-types';

const ResumeContext = createContext();

export const useResumeDefaultContext = () => {
  const jsonData = require('../assets/mocks/linkedin.json');
  
  const [name, setName] = useState(jsonData.firstName + ' ' + jsonData.lastName);
  const [role, setRole] = useState(PersonnelInfo.ROLE);

  return {
    name,
    role,
  };
};
export const ResumeProvider = ({ children }) => {
  const context = useResumeDefaultContext();
  return (
    <ResumeContext.Provider value={context}>
      {children}
    </ResumeContext.Provider>
  );
};

ResumeProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default ResumeContext;
export const useResumeContext = () => useContext(ResumeContext);