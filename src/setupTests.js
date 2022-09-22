// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import nock from 'nock';
import { backendApi } from './assets/constants'

const API_BASE_URL = backendApi.API_HEADER + backendApi.API_IP + backendApi.API_PORT;

const setupNock = () => {    
    const nockHeaders = {
        'access-control-allow-origin': '*',
        'access-control-allow-credentials': 'true', 
        'access-control-allow-headers': 'Authorization'
    };

    nock.disableNetConnect();
    nock(API_BASE_URL)
        .defaultReplyHeaders(nockHeaders)
        .intercept(/./, 'OPTIONS')
        .reply(200)
        .persist();

    const mockNock = (...args) => nock(...args).defaultReplyHeaders(nockHeaders);
    Object.entries(nock).forEach(([k, v]) => {  mockNock[k] = v; });
    jest.mock('nock', () => mockNock);
};

setupNock();
