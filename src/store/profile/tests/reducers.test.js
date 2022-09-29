import { createAction } from '@reduxjs/toolkit';
import { fetchProfileInfo, fetchExperienceInfo, fetchEducationInfo } from '../actions';
import reducers from '../reducers';
import mockFullProfile from '../../../assets/mocks/mockFullProfile.json';
import mockExperience from '../../../assets/mocks/mockExperience.json';
import mockEducation from '../../../assets/mocks/mockEducation.json';
import mockStore from '../../../assets/mocks/mockStore.json';

describe('profile.reducers tests', () => {
  describe('fetchProfileInfo', () => {
    it('when pending - should set boolean for loading', () => {
      const pending = createAction(fetchProfileInfo.pending);
      expect(reducers({}, pending())).toEqual({ loading_profile: true });
    });

    it('when fulfilled - should set store with payload', () => {
      const fulfilled = createAction(fetchProfileInfo.fulfilled);
      expect(reducers({}, fulfilled(mockFullProfile))).toEqual({
        loading_profile: mockStore.profile.loading_profile,
        info: mockStore.profile.info,
        data: mockFullProfile,
      });
    });

    it('when rejected - should add error to state', () => {
      const error = { code: 123, message: 'Whoops!' };
      const rejected = createAction(fetchProfileInfo.rejected);
      expect(reducers({}, rejected(error))).toEqual({ error });
    });
  });

  describe('fetchExperienceInfo', () => {
    it('when pending - should set boolean for loading', () => {
      const pending = createAction(fetchExperienceInfo.pending);
      expect(reducers({}, pending())).toEqual({ loading_experience: true });
    });

    it('when fulfilled - should set store with payload', () => {
      const fulfilled = createAction(fetchExperienceInfo.fulfilled);
      expect(reducers({}, fulfilled(mockExperience))).toEqual({
        loading_experience: mockStore.profile.loading_experience,
        experience: mockStore.profile.experience,
      });
    });

    it('when rejected - should add error to state', () => {
      const error = { code: 123, message: 'Whoops!' };
      const rejected = createAction(fetchExperienceInfo.rejected);
      expect(reducers({}, rejected(error))).toEqual({ error });
    });
  });

  describe('fetchEducationInfo', () => {
    it('when pending - should set boolean for loading', () => {
      const pending = createAction(fetchEducationInfo.pending);
      expect(reducers({}, pending())).toEqual({ loading_education: true });
    });

    it('when fulfilled - should set store with payload', () => {
      const fulfilled = createAction(fetchEducationInfo.fulfilled);
      expect(reducers({}, fulfilled(mockEducation))).toEqual({
        loading_education: mockStore.profile.loading_education,
        education: mockStore.profile.education,
        internship: mockStore.profile.internship,
      });
    });

    it('when rejected - should add error to state', () => {
      const error = { code: 123, message: 'Whoops!' };
      const rejected = createAction(fetchEducationInfo.rejected);
      expect(reducers({}, rejected(error))).toEqual({ error });
    });
  });

  it('Default - If action is unknown, the state should be unchanged', () => {
    const unknownAction = {
      type: 'UNKNOWN_ACTION',
    };

    expect(reducers({}, unknownAction)).toEqual({});
  });
});
