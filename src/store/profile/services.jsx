import callApi from '../api/services';
import { PersonnelInfo, backendApi } from '../../assets/constants';

const API_BASE_URL = backendApi.API_HEADER + backendApi.API_IP + backendApi.API_PORT;
const PROFILE_NAME = PersonnelInfo.NAME.toLowerCase().replace(' ', '-');

const postMethod = { basePath: API_BASE_URL, method: 'POST', body: JSON.stringify({ profile: `${PROFILE_NAME}` }) };

export const queryProfileInfo = () => callApi(backendApi.API_ENDPOINT_PROFILE, postMethod);

export const queryExperienceInfo = () => callApi(backendApi.API_ENDPOINT_EXPEIENCE, postMethod);

export const queryEducationInfo = () => callApi(backendApi.API_ENDPOINT_EDUCATION, postMethod);
