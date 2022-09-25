/* eslint-disable import/prefer-default-export */
import { mockAsyncThunk } from '../../../assets/utils/func.utils';

export const fetchProfileInfo = mockAsyncThunk('FETCH_PROFILE_INFO');

export const fetchExperienceInfo = mockAsyncThunk('FETCH_EXPERIENCE_INFO');

export const fetchEducationInfo = mockAsyncThunk('FETCH_EDUCATION_INFO');
