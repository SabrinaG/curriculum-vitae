/* eslint-disable no-param-reassign */

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import nock from 'nock';
import { ErrorHandler } from './assets/utils/ErrorHandler';
import { backendApi } from './assets/constants';

const API_BASE_URL = backendApi.API_HEADER + backendApi.API_IP + backendApi.API_PORT;

const setupNock = () => {
  const nockHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Basic c2FicmluYTpndWlh`,
    'Access-control-allow-origin': '*',
    'Access-control-allow-credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, OPTIONS, HEAD, DELETE',
    'Access-Control-Allow-Headers': 'Origin,Accept,authorization,DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
  };

  nock.disableNetConnect();
  nock(API_BASE_URL)
    .defaultReplyHeaders(nockHeaders)
    .intercept(/./, 'OPTIONS')
    .reply(200)
    .persist();

  const mockNock = (...args) => nock(...args).defaultReplyHeaders(nockHeaders);
  Object.entries(nock).forEach(([k, v]) => { mockNock[k] = v; });
  jest.mock('nock', () => mockNock);
};

const setupWindow = () => {
  const mockWindowLocation = Object.keys(window.location)
    .reduce((obj, key) => {
      const value = window.location[key];
      if (typeof value === 'function') {
        obj[key] = jest.fn(value);
      } else {
        obj[key] = value;
      }
      return obj;
    }, {});

  delete window.location;
  window.location = mockWindowLocation;
  delete window.env;
  window.env = {
    API_BASE_URL: backendApi.API_HEADER + backendApi.API_IP + backendApi.API_PORT,
  };
};

const setupUtils = () => {
  jest.spyOn(ErrorHandler, 'logError');
  jest.spyOn(ErrorHandler, 'logReactError');
};

setupWindow();
setupNock();
setupUtils();
