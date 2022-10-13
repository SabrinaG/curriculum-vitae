import { createSelector } from '@reduxjs/toolkit';

const profileSelector = state => state.profile;

export const selectLoadingProfileInfo = createSelector(
  profileSelector,
  profile => profile.loading_profile,
);

export const selectLoadingExperienceData = createSelector(
  profileSelector,
  profile => profile.loading_experience,
);

export const selectLoadingEducationData = createSelector(
  profileSelector,
  profile => profile.loading_education,
);

export const selectProfileData = createSelector(
  profileSelector,
  profile => profile.data,
);

export const selectProfileInfo = createSelector(
  profileSelector,
  profile => profile.info,
);

export const selectExperienceData = createSelector(
  profileSelector,
  profile => profile.experience,
);

export const selectInternshipData = createSelector(
  profileSelector,
  profile => profile.internship,
);

export const selectEducationData = createSelector(
  profileSelector,
  profile => profile.education,
);
