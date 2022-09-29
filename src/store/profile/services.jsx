import callApi from '../api/services';
import { API_BASE_URL, PROFILE_NAME, backendApi } from '../../assets/constants';

const postMethod = { basePath: API_BASE_URL, method: 'POST', body: JSON.stringify({ profile: `${PROFILE_NAME}` }) };

export const queryProfileInfo = () => callApi(backendApi.API_ENDPOINT_PROFILE, postMethod);

export const queryExperienceInfo = () => callApi(backendApi.API_ENDPOINT_EXPEIENCE, postMethod);

export const queryEducationInfo = () => callApi(backendApi.API_ENDPOINT_EDUCATION, postMethod);
