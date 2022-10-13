import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import profile from './profile/reducers';

const rootReducer = combineReducers({
  profile,
});

const initialState = {};

const thunkMiddleware = applyMiddleware(thunk);
const reduxDevToolsEnabled = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__;
const reduxMiddleware = reduxDevToolsEnabled
  ? compose(thunkMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__())
  : compose(thunkMiddleware);

const store = (initialStateArg = initialState) => createStore(rootReducer, initialStateArg, reduxMiddleware);

export default store;
