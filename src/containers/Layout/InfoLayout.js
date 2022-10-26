// import React from 'react';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Personnel from '../../components/Personnel/Personnel';
import Professional from '../../components/Professional/Professional';
import ToogleButton from '../../components/Buttons/ToogleButton';
import InfoButton from '../../components/Buttons/InfoButton';
import { SyledButtons } from '../../components/Buttons/Buttons.styled';
import { StyledPersonnel, StyledProfessional } from '../../assets/themes/Components.styled';
// import { useResumeContext } from '../../context/ResumeContext';
import ResumeContext from '../../context/ResumeContext';
import './Layout.css';

const renderInfoLayout = selectedTheme => (
  <ThemeProvider theme={selectedTheme}>
    <div className="layout" data-testid="layout">
      <StyledPersonnel data-testid="personnel">
        <Personnel />
      </StyledPersonnel>
      <StyledProfessional data-testid="professional">
        <SyledButtons data-testid="styled-buttons">
          <InfoButton />
          <ToogleButton />
        </SyledButtons>
        <Professional />
      </StyledProfessional>
    </div>
  </ThemeProvider>
);

// ===== FUNCTIONAL COMPONENT SRC CODE =====
// function InfoLayout() {
//   const resumeContext = useResumeContext();
//   return (
//     renderInfoLayout(resumeContext.getSelectedTheme())
//   );
// }

// ===== CLASS COMPONENT SRC CODE =====
// eslint-disable-next-line react/prefer-stateless-function
export class InfoLayout extends Component {
  render() {
    return (
      renderInfoLayout(this.context.getSelectedTheme())
    );
  }
}

InfoLayout.contextType = ResumeContext;

export default InfoLayout;
