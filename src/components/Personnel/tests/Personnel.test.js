/* eslint-disable import/named */
import { screen, within, } from '@testing-library/react';
import { PersonnelInfo, ContactsInfo, LanguagesInfo } from '../../../assets/constants';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import resumeContextData from '../../../assets/mocks/resumeContextData';
import { ResumeProvider } from '../../../context/ResumeContext';
import Personnel from '../Personnel';

describe('components.Personnel tests', () => {
  it('should render Personnel component', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><Personnel /></ResumeProvider>, { store });

    expect(screen.getByTestId('personnel-grid-container')).toBeTruthy();
    expect(screen.getByTestId('personnel-grid-photo')).toBeTruthy();
    expect(screen.getByTestId('avatar-img')).toBeTruthy();
    expect(screen.getByTestId('personnel-grid-subject')).toBeTruthy();
    expect(screen.getByTestId('personnel-grid-name')).toBeTruthy();
    expect(screen.getByTestId('personnel-grid-role')).toBeTruthy();
    expect(screen.getByTestId('personnel-grid-detail')).toBeTruthy();
    expect(screen.getByTestId('personnel-grid-subject')).toBeTruthy();
    expect(screen.getByTestId('personnel-grid-detail')).toBeTruthy();
    expect(screen.getAllByTestId('personnel-info-grid-container')).toHaveLength(4);
    expect(screen.getAllByTestId('personnel-info-grid-header')).toHaveLength(4);
    expect(screen.getAllByTestId('personnel-info-grid-icon')).toHaveLength(12);
  });

  it('should render owner information, with store empty', () => {
    const testStore = {
      profile: {
        loading_profile: false,
      }
    }
    const store = configureTestStore({ ...testStore });
    renderWithProviders(<ResumeProvider value={resumeContextData}><Personnel /></ResumeProvider>, { store });

    expect(screen.getByTestId('avatar-img')).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.NAME)).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.ROLE)).toBeTruthy();
  });

  it('should render owner information, with store fulfilled', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><Personnel /></ResumeProvider>, { store });

    expect(screen.getByTestId('avatar-img')).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.NAME)).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.ROLE)).toBeTruthy();
  });

  it('should render spinner, when the store empty', () => {
    const testStore = {
      profile: {
        loading_profile: true,
      }
    }

    const store = configureTestStore({ ...testStore });
    renderWithProviders(<ResumeProvider><Personnel /></ResumeProvider>, { store });

    expect(screen.getByTestId('personnel-load-spinner')).toBeTruthy();
    const personnelDetail = screen.getByTestId('personnel-grid-container');
    const loadingSpinner = within(personnelDetail).getAllByTestId('personnel-load-spinner');
    expect(loadingSpinner).toHaveLength(1);
  });

  it('should render contact information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><Personnel /></ResumeProvider>, { store });

    expect(screen.getAllByText('CONTACT')).toBeTruthy();
    expect(screen.getAllByText(ContactsInfo.LOCATION)).toBeTruthy();
    expect(screen.getAllByText(ContactsInfo.PHONE)).toBeTruthy();
    expect(screen.getByTestId('phone').getAttribute("href")).toEqual(`tel: ${ContactsInfo.PHONE}`);
    expect(screen.getAllByText(ContactsInfo.EMAIL)).toBeTruthy();
    expect(screen.getByTestId('email').getAttribute("href")).toEqual(`mailto: ${ContactsInfo.EMAIL}`);
  });

  it('should render links information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><Personnel /></ResumeProvider>, { store });

    expect(screen.getAllByText('LINKS')).toBeTruthy();
    expect(screen.getByTestId('github').getAttribute("href")).toEqual(ContactsInfo.GITHUB);
    expect(screen.getAllByText('Git repo')).toBeTruthy();
    expect(screen.getByTestId('linkedin').getAttribute("href")).toEqual(ContactsInfo.LINKEDIN);
    expect(screen.getAllByText('LinkedIn profile')).toBeTruthy();
    expect(screen.getByTestId('cv').getAttribute("href")).toBeTruthy();
    expect(screen.getAllByText('Curriculum Vitae')).toBeTruthy();
  });

  it('should render languages information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><Personnel /></ResumeProvider>, { store });

    expect(screen.getAllByText('LANGUAGES')).toBeTruthy();
    LanguagesInfo.map((language) => {
      expect(screen.getAllByText(language)).toBeTruthy();
      expect(screen.getByTestId(`${language}_flag`).getAttribute("alt")).toEqual(`${language}_flag`);
    })
  });

  it('should open url in a new tab when clicking on a element with href', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<ResumeProvider><Personnel /></ResumeProvider>, { store });

    expect(screen.getByTestId('linkedin').getAttribute("href")).toEqual(ContactsInfo.LINKEDIN);
    expect(screen.getByTestId('linkedin').getAttribute("target")).toEqual('_blank');

    // userEvent.click(screen.getByTestId('linkedin'));
    // expect(window.location.href).toBe(ContactsInfo.LINKEDIN);

    // fireEvent.click(screen.getByTestId('linkedin'));
    // expect(window.location.href).toBe(ContactsInfo.LINKEDIN);
  });
});