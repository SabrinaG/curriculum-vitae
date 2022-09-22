/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchProfileInfo, fetchExperienceInfo, fetchEducationInfo } from './actions';
import { calcAge } from '../../assets/utils/func.utils';
import { PersonnelInfo, ContactsInfo } from '../../assets/constants';

const initialState = {
  loading_profile: true,
  loading_experience: true,
  loading_education: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfileInfo.fulfilled](state, { payload }) {
      state.loading_profile = false;
      state.data = payload;
      state.info = {
        name: `${payload.firstName} ${payload.lastName}`,
        birth_date: `${payload.birthDate.day}/${payload.birthDate.month}/${payload.birthDate.year}`,
        age: `${calcAge(`${payload.birthDate.year}/${payload.birthDate.month}/${payload.birthDate.day}`)} years`,
        location: `${payload.geoLocationName.split(',')[0]}, ${payload.geoCountryName}`,
        phone_number: ContactsInfo.PHONE,
        e_mail: ContactsInfo.EMAIL,
        career_role: PersonnelInfo.ROLE,
      }
    },
    [fetchProfileInfo.pending](state) {
      state.loading_profile = true;
    },
    [fetchProfileInfo.rejected](state, { payload }) {
      state.error = payload;
    },
    [fetchExperienceInfo.fulfilled](state, { payload }) {
      state.loading_experience = false;
      state.data = payload;
      state.experience = { };

      for (let xp in payload.experience) {
        const company = payload.experience[xp]["companyName"].split(' ')[0];
        const startObj = payload.experience[xp]["timePeriod"].startDate;
        const start = startObj ? `${payload.experience[xp]["timePeriod"].startDate?.month}/${payload.experience[xp]["timePeriod"].startDate?.year}` : '';
        const stopObj = payload.experience[xp]["timePeriod"].endDate;
        const stop = stopObj ? `${payload.experience[xp]["timePeriod"].endDate?.month}/${payload.experience[xp]["timePeriod"].endDate?.year}` : 'Present';
        const description = payload.experience[xp]["description"];
        const projectObj = {}
        const project = description.split(' ')[0];
        projectObj[project] = {start, stop, description};

        state.experience[company] = {
          ...state.experience[company],
          ...projectObj
        };
      }
    },
    [fetchExperienceInfo.pending](state) {
      state.loading_experience = true;
    },
    [fetchExperienceInfo.rejected](state, { payload }) {
      state.error = payload;
    },
    [fetchEducationInfo.fulfilled](state, { payload }) {
      state.loading_education = false;
      state.data = payload;
      state.education = { }
      state.internship = { }

      for (let ed in payload.education) {
        const university = payload.education[ed]["schoolName"];
        const grade = payload.education[ed]["grade"];
        const degree = payload.education[ed]["degreeName"];
        const studyField = payload.education[ed]["fieldOfStudy"];

        const startObj = payload.education[ed]["timePeriod"].startDate;
        const start = startObj ? `${payload.education[ed]["timePeriod"].startDate?.month}/${payload.education[ed]["timePeriod"].startDate?.year}` : '';
        const stopObj = payload.education[ed]["timePeriod"].endDate;
        const stop = stopObj ? `${payload.education[ed]["timePeriod"].endDate?.month}/${payload.education[ed]["timePeriod"].endDate?.year}` : 'Present';

        const studyObj = {};
        studyObj[degree ? degree : grade ] = {start, stop, studyField};

        if(grade && !degree) {
          state.internship[university] = {
            ...state.internship[university],
            ...studyObj,
          };
        }

        if(degree) {
          state.education[university] = {
            ...state.education[university],
            ...studyObj
          };
        }
      }
    },
    [fetchEducationInfo.pending](state) {
      state.loading_education = true;
    },
    [fetchEducationInfo.rejected](state, { payload }) {
      state.error = payload;
    },
  },
});

export default profileSlice.reducer;
