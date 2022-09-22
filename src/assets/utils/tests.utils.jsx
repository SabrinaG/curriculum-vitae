/* eslint-disable react/prop-types */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import withMarkup from './withMarkup';

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

const asyncNoop = async () => { };

export const mockAsyncThunk = (type, fulfilledImpl = asyncNoop) => {
  if (!fulfilledImpl || typeof fulfilledImpl !== 'function') {
    throw new Error('mock implementation must a function');
  }

  const implMock = jest.fn(fulfilledImpl); // allows us to customize the thunk behaviour
  const actionCreator = jest.fn(createAsyncThunk(type, implMock)); // allows us to verify that our stub was invoked

  /**
   * You can customize your mock for specific tests by doing this:
   *
   * const myMock = mockAsyncThunk(...)
   * myMock.$mock.mockImplementationOnce(() => <your custom implementation here>)
   */
  actionCreator.$mock = implMock;

  return actionCreator;
};

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
        {component}
      </Provider>,
    ),
    store,
  };

  testingNode.rerenderWithProviders = (el, newStore = store) => renderWithProviders(
    el,
    {
      store: newStore,
      history,
    },
    testingNode.rerender,
  );

  testingNode.getByTextWithMarkup = withMarkup(testingNode.getByText);
  testingNode.queryByTextWithMarkup = withMarkup(testingNode.queryByText);
  testingNode.findByTextWithMarkup = withMarkup(testingNode.findByText);

  return testingNode;
};

export const asyncRenderWithProviders = async (...args) => {
};
