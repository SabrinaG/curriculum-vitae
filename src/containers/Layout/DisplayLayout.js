// import React from 'react';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Personnel from '../../components/Personnel/Personnel';
import Gallery from '../../components/Gallery/Gallery';
import ToogleButton from '../../components/Buttons/ToogleButton';
import { SyledButtons } from '../../components/Buttons/Buttons.styled';
import { StyledPersonnel, StyledGallery } from '../../assets/themes/Components.styled';
// import { useResumeContext } from '../../context/ResumeContext';
import ResumeContext from '../../context/ResumeContext';
import './Layout.css';

const renderDisplayLayout = selectedTheme => (
  <ThemeProvider theme={selectedTheme}>
    <div className="layout" data-testid="layout">
      <StyledPersonnel data-testid="personnel">
        <Personnel />
      </StyledPersonnel>
      <StyledGallery data-testid="gallery">
        <SyledButtons data-testid="styled-buttons">
          <ToogleButton />
        </SyledButtons>
        <Gallery />
      </StyledGallery>
    </div>
  </ThemeProvider>
);

// ===== FUNCTIONAL COMPONENT SRC CODE =====
// function DisplayLayout() {
//   const resumeContext = useResumeContext();
//   return (
//     renderDisplayLayout(resumeContext.getSelectedTheme())
//   );
// }

// ===== CLASS COMPONENT SRC CODE =====
// eslint-disable-next-line react/prefer-stateless-function
export class DisplayLayout extends Component {
  render() {
    return (
      renderDisplayLayout(this.context.getSelectedTheme())
    );
  }
}

DisplayLayout.contextType = ResumeContext;

export default DisplayLayout;
