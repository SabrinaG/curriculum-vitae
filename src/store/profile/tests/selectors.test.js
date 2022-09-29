import {
  selectLoadingProfileInfo,
  selectLoadingExperienceData,
  selectLoadingEducationData,
  selectProfileData,
  selectProfileInfo,
  selectExperienceData,
  selectInternshipData,
  selectEducationData,
} from '../selectors';
import mockStore from '../../../assets/mocks/mockStore.json';

describe('profile.selectors tests', () => {
  let state;
  beforeEach(() => {
    state = mockStore;
  });

  it('selectLoadingProfileInfo - Should select profile info loading status', () => {
    expect(selectLoadingProfileInfo(state)).toEqual(mockStore.profile.loading_profile);
  });

  it('selectLoadingExperienceData - Should select experience data loading status', () => {
    expect(selectLoadingExperienceData(state)).toEqual(mockStore.profile.loading_experience);
  });

  it('selectLoadingEducationData - Should select education data loading status', () => {
    expect(selectLoadingEducationData(state)).toEqual(mockStore.profile.loading_education);
  });

  it('selectProfileData - Should select profile data', () => {
    expect(selectProfileData(state)).toEqual(mockStore.profile.data);
  });

  it('selectProfileInfo - Should select profile info data', () => {
    expect(selectProfileInfo(state)).toEqual(mockStore.profile.info);
  });

  it('selectExperienceData - Should select profile expirience data', () => {
    expect(selectExperienceData(state)).toEqual(mockStore.profile.experience);
  });

  it('selectInternshipData - Should select profile internship data', () => {
    expect(selectInternshipData(state)).toEqual(mockStore.profile.internship);
  });

  it('selectEducationData - Should select profile education data', () => {
    expect(selectEducationData(state)).toEqual(mockStore.profile.education);
  });
});
