import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';

import { ResumeProvider } from '../../context/ResumeContext';

const middleware = [thunk];
const createMockStore = configureMockStore(middleware);

export function configureTestStore(initialState = {}) {
  const store = createMockStore(initialState);
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);

  return store;
}

export function filterAction(store) {
  return ({ type }) => store.getActions().find(a => a.type === type);
}

/**
 * Create provider wrapper
 */
export const renderWithProviders = (
  component,
  {
    state: initialState = {},
    store = configureTestStore(initialState),
    history = createMemoryHistory('/'),
  } = {},
  renderFn = render,
) => {
  const testingNode = {
    ...renderFn(
      <Provider store={store}>
        <ResumeProvider>
          {component}
        </ResumeProvider>
      </Provider>,
    ),
    store,
  };

  testingNode.rerenderWithProviders = (el, newState) => renderWithProviders(
    el,
    {
      state: newState,
      store,
      history,
    },
    testingNode.rerender,
  );

  return testingNode;
};

export const asyncRenderWithProviders = async (...args) => renderWithProviders(...args);
