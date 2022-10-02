/* eslint-disable import/no-extraneous-dependencies */
import nock from 'nock';
import { fetchProfileInfo, fetchExperienceInfo, fetchEducationInfo } from '../actions';
import { PersonnelInfo, backendApi } from '../../../assets/constants';
import { configureTestStore, filterAction } from '../../../assets/utils/tests.utils';
import mockFullProfile from '../../../assets/mocks/mockFullProfile.json';
import mockExperience from '../../../assets/mocks/mockExperience.json';
import mockEducation from '../../../assets/mocks/mockEducation.json';

const API_BASE_URL = backendApi.API_HEADER + backendApi.API_IP + backendApi.API_PORT;
const PROFILE_NAME = PersonnelInfo.NAME.toLowerCase().replace(' ', '-');

describe('profile.actions tests', () => {
  let store;
  let getAction;

  beforeEach(() => {
    store = configureTestStore({ api: {}, profile: {} });
    getAction = filterAction(store);
  });

  describe('fetchProfileInfo', () => {
    it('when success - Should create actions: loading, success', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_PROFILE, JSON.stringify({ profile: `${PROFILE_NAME}` }))
        .reply(200, mockFullProfile);

      await store.dispatch(fetchProfileInfo());

      expect(getAction(fetchProfileInfo.pending)).toBeTruthy();
      expect(getAction(fetchProfileInfo.fulfilled)).toBeTruthy();
      expect(getAction(fetchProfileInfo.rejected)).toBeFalsy();
    });

    it('when success - Should receive correct data', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_PROFILE, JSON.stringify({ profile: `${PROFILE_NAME}` }))
        .reply(200, mockFullProfile);

      await store.dispatch(fetchProfileInfo()).then(requestResult =>
        expect(Object.keys(requestResult.payload)).toEqual(Object.keys(mockFullProfile)),
      );
    });

    it('when failure - Should create actions: loading, failure', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_PROFILE, { profile: `${PROFILE_NAME}` })
        .reply(500, 'Failed to fetch experience info');

      await store.dispatch(fetchProfileInfo());

      expect(getAction(fetchProfileInfo.pending)).toBeTruthy();
      expect(getAction(fetchProfileInfo.fulfilled)).toBeFalsy();
      expect(getAction(fetchProfileInfo.rejected)).toBeTruthy();
    });
  });

  describe('fetchExperienceInfo', () => {
    it('when success - Should create actions: loading, success', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_EXPEIENCE, JSON.stringify({ profile: `${PROFILE_NAME}` }))
        .reply(200, mockExperience);

      await store.dispatch(fetchExperienceInfo());

      expect(getAction(fetchExperienceInfo.pending)).toBeTruthy();
      expect(getAction(fetchExperienceInfo.fulfilled)).toBeTruthy();
      expect(getAction(fetchExperienceInfo.rejected)).toBeFalsy();
    });

    it('when success - Should receive correct data', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_EXPEIENCE, JSON.stringify({ profile: `${PROFILE_NAME}` }))
        .reply(200, mockExperience);

      await store.dispatch(fetchExperienceInfo()).then(requestResult =>
        expect(Object.keys(requestResult.payload)).toEqual(Object.keys(mockExperience)),
      );
    });

    it('when failure - Should create actions: loading, failure', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_EXPEIENCE, { profile: `${PROFILE_NAME}` })
        .reply(500, 'Failed to fetch experience info');

      await store.dispatch(fetchExperienceInfo());

      expect(getAction(fetchExperienceInfo.pending)).toBeTruthy();
      expect(getAction(fetchExperienceInfo.fulfilled)).toBeFalsy();
      expect(getAction(fetchExperienceInfo.rejected)).toBeTruthy();
    });
  });

  describe('fetchEducationInfo', () => {
    it('when success - Should create actions: loading, success', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_EDUCATION, JSON.stringify({ profile: `${PROFILE_NAME}` }))
        .reply(200, mockEducation);

      await store.dispatch(fetchEducationInfo());

      expect(getAction(fetchEducationInfo.pending)).toBeTruthy();
      expect(getAction(fetchEducationInfo.fulfilled)).toBeTruthy();
      expect(getAction(fetchEducationInfo.rejected)).toBeFalsy();
    });

    it('when success - Should receive correct data', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_EDUCATION, JSON.stringify({ profile: `${PROFILE_NAME}` }))
        .reply(200, mockEducation);

      await store.dispatch(fetchEducationInfo()).then(requestResult =>
        expect(Object.keys(requestResult.payload)).toEqual(Object.keys(mockEducation)),
      );
    });

    it('when failure - Should create actions: loading, failure', async () => {
      nock(API_BASE_URL)
        .post(backendApi.API_ENDPOINT_EDUCATION, JSON.stringify({ profile: `${PROFILE_NAME}` }))
        .reply(500, 'Failed to fetch education info');

      await store.dispatch(fetchEducationInfo());

      expect(getAction(fetchEducationInfo.pending)).toBeTruthy();
      expect(getAction(fetchEducationInfo.fulfilled)).toBeFalsy();
      expect(getAction(fetchEducationInfo.rejected)).toBeTruthy();
    });
  });
});
