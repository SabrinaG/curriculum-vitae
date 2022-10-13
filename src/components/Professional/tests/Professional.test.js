import React from 'react';
import { screen } from '@testing-library/react';
import { PersonnelInfo, SkillsList } from '../../../assets/constants';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import Professional from '../Professional';

describe('components.Professional tests', () => {
  it('should render Professional component', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Professional />, { store });

    expect(screen.getAllByTestId('professional-grid-container')).toHaveLength(1);
    expect(screen.getAllByTestId('professional-experience-container')).toHaveLength(1);
    expect(screen.getAllByTestId('professional-internship-container')).toHaveLength(1);
    expect(screen.getAllByTestId('professional-education-container')).toHaveLength(1);
    expect(screen.getAllByTestId('professional-skills-container')).toHaveLength(1);
    expect(screen.getAllByTestId('professional-driving-container')).toHaveLength(1);
  });

  it('should call dispach store actions on render Professional component', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Professional />, { store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledTimes(2);
    // expect(store.dispatch).toHaveBeenCalledWith(fetchExperienceInfo());
    // expect(store.dispatch).toHaveBeenCalledWith(fetchEducationInfo());
  });

  it('should render spinner, when the store empty', () => {
    const testStore = {
      profile: {
        loading_experience: true,
        loading_education: true,
      },
    };

    const store = configureTestStore({ ...testStore });
    renderWithProviders(<Professional />, { store });

    expect(screen.getByTestId('professional-load-spinner')).toBeTruthy();
  });

  it('should render experience information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Professional />, { store });

    expect(screen.getAllByText('EXPERIENCE')).toBeTruthy();
    expect(screen.getAllByTestId('professional-info-grid-date')).toBeTruthy();
    expect(screen.getAllByTestId('professional-experience-header')).toHaveLength(1);
    expect(screen.getAllByTestId('professional-experience-date')).toHaveLength(4);
    expect(screen.getAllByTestId('professional-experience-info')).toHaveLength(4);
    expect(screen.getAllByTestId('experience-link')).toHaveLength(4);

    const linksList = screen.getAllByTestId('experience-link');
    linksList.forEach((element) => {
      expect(element).toBeTruthy();
      expect(element.href).toBeDefined();
      expect(element.getAttribute('target')).toEqual('_blank');
      expect(element.getAttribute('rel')).toEqual('noreferrer');
    });

    expect(screen.getAllByTestId('professional-experience-logo')).toHaveLength(1);

    const logoImage = screen.getByTestId('company_logo');
    expect(logoImage).toBeTruthy();
    expect(logoImage.src).toBeDefined();
    expect(logoImage.alt).toBeDefined();
    expect(logoImage.title).toBeDefined();
    expect(logoImage.style).toBeDefined();
  });

  // it('should link style on mouseover projects', () => {
  //   const store = configureTestStore({ ...mockStore });
  //   renderWithProviders(<Professional />, { store });

  //   expect(screen.getAllByText('EXPERIENCE')).toBeTruthy();
  //   expect(screen.getAllByTestId('experience-link')).toHaveLength(4);

  //   const linksList = screen.getAllByTestId('experience-link');

  //   expect(linksList[0]).toHaveStyle({ color: "#000000" });

  //   fireEvent.mouseOver(linksList[0]);

  //   expect(linksList[0]).toHaveStyle({ color: "#021040" });
  // });

  it('should render intership information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Professional />, { store });

    expect(screen.getAllByText('INTERNSHIP')).toBeTruthy();
  });

  it('should render skils information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Professional />, { store });

    expect(screen.getAllByText('SKILLS')).toBeTruthy();
    expect(screen.getAllByTestId('grid-logo')).toBeTruthy();
    expect(screen.getAllByTestId('grid-logo')).toHaveLength(4);

    // eslint-disable-next-line array-callback-return
    Object.keys(SkillsList).map((skill) => {
      const image = screen.getByTestId(skill);
      expect(image).toBeTruthy();
      expect(image.getAttribute('alt')).toEqual(skill);
      expect(image.title).toContain(skill);
      expect(image.src).toBeDefined();
    });
  });

  it('should render driving licence information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Professional />, { store });

    expect(screen.getAllByText('DRIVING LICENCE')).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.LICENCE)).toBeTruthy();
  });
});
