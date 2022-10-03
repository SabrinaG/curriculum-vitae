import React from 'react';
import { screen, within, fireEvent } from '@testing-library/react';
import { PersonnelInfo, ContactsInfo, LanguagesInfo } from '../../../assets/constants';
import { configureTestStore, renderWithProviders } from '../../../assets/utils/tests.utils';
import mockStore from '../../../assets/mocks/mockStore.json';
import Personnel from '../Personnel';

describe('components.Personnel tests', () => {
  it('should render Personnel component', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

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

  it('should dispach store actions on render Personnel component', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    // expect(store.dispatch).toHaveBeenCalledWith(fetchProfileInfo());
  });

  it('should render owner information, with store empty', () => {
    const testStore = {
      profile: {
        loading_profile: false,
      },
    };
    const store = configureTestStore({ ...testStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getByTestId('avatar-img')).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.NAME)).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.ROLE)).toBeTruthy();
  });

  it('should render owner information, with store fulfilled', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getByTestId('avatar-img')).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.NAME)).toBeTruthy();
    expect(screen.getAllByText(PersonnelInfo.ROLE)).toBeTruthy();
  });

  it('should render spinner, when the store empty', () => {
    const testStore = {
      profile: {
        loading_profile: true,
      },
    };

    const store = configureTestStore({ ...testStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getByTestId('personnel-load-spinner')).toBeTruthy();
    const personnelDetail = screen.getByTestId('personnel-grid-container');
    const loadingSpinner = within(personnelDetail).getAllByTestId('personnel-load-spinner');
    expect(loadingSpinner).toHaveLength(1);
  });

  it('should render contact information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getAllByText('CONTACT')).toBeTruthy();
    expect(screen.getAllByText(ContactsInfo.LOCATION)).toBeTruthy();
    expect(screen.getAllByText(ContactsInfo.PHONE)).toBeTruthy();
    expect(screen.getByTestId('phone').getAttribute('href')).toEqual(`tel: ${ContactsInfo.PHONE}`);
    expect(screen.getAllByText(ContactsInfo.EMAIL)).toBeTruthy();
    expect(screen.getByTestId('email').getAttribute('href')).toEqual(`mailto: ${ContactsInfo.EMAIL}`);
  });

  it('should render links information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getAllByText('LINKS')).toBeTruthy();
    expect(screen.getByTestId('github').getAttribute('href')).toEqual(ContactsInfo.GITHUB);
    expect(screen.getAllByText('Git repo')).toBeTruthy();
    expect(screen.getByTestId('linkedin').getAttribute('href')).toEqual(ContactsInfo.LINKEDIN);
    expect(screen.getAllByText('LinkedIn profile')).toBeTruthy();
    expect(screen.getByTestId('cv').getAttribute('href')).toBeTruthy();
    expect(screen.getAllByText('Curriculum Vitae')).toBeTruthy();
  });

  it('should render languages information, when not in loading status', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getAllByText('LANGUAGES')).toBeTruthy();
    // eslint-disable-next-line array-callback-return
    LanguagesInfo.map((language) => {
      expect(screen.getAllByText(language)).toBeTruthy();
      expect(screen.getByTestId(`${language}_flag`).getAttribute('alt')).toEqual(`${language}_flag`);
    });
  });

  it('should open url in a new tab when clicking on a element with href', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getByTestId('linkedin').getAttribute('href')).toEqual(ContactsInfo.LINKEDIN);
    expect(screen.getByTestId('linkedin').getAttribute('target')).toEqual('_blank');

    // userEvent.click(screen.getByTestId('linkedin'));
    // expect(window.location.href).toBe(ContactsInfo.LINKEDIN);

    // fireEvent.click(screen.getByTestId('linkedin'));
    // expect(window.location.href).toBe(ContactsInfo.LINKEDIN);
  });

  it('should render modal message on mouseover profile image', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getByTestId('avatar-img')).toBeTruthy();

    expect(screen.queryByTestId('modal-wrapper')).toBeFalsy();

    fireEvent.mouseOver(screen.getByTestId('avatar-img'));

    expect(screen.getByTestId('modal-wrapper')).toBeTruthy();

    fireEvent.click(screen.getByTestId('close-button'));

    expect(screen.queryByTestId('modal-wrapper')).toBeFalsy();
  });

  it('should render modal frame on mouseover curriculum vitae link', () => {
    const store = configureTestStore({ ...mockStore });
    renderWithProviders(<Personnel />, { store });

    expect(screen.getByTestId('cv')).toBeTruthy();

    expect(screen.queryByTestId('modal-wrapper')).toBeFalsy();

    fireEvent.mouseOver(screen.getByTestId('cv'));

    expect(screen.getByTestId('modal-wrapper')).toBeTruthy();

    fireEvent.click(screen.getByTestId('close-button'));

    expect(screen.queryByTestId('modal-wrapper')).toBeFalsy();
  });
});
