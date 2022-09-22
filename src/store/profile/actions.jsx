import { createAsyncThunk } from '@reduxjs/toolkit';
import { queryProfileInfo, queryExperienceInfo, queryEducationInfo } from './services';

export const fetchProfileInfo = createAsyncThunk(
  'FETCH_PROFILE_INFO',
  async () => queryProfileInfo(),
);

export const fetchExperienceInfo = createAsyncThunk(
  'FETCH_EXPERIENCE_INFO',
  async () => queryExperienceInfo(),
);

export const fetchEducationInfo = createAsyncThunk(
  'FETCH_EDUCATION_INFO',
  async () => queryEducationInfo(),
);