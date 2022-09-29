import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/common.scss';
import './index.css';
import { Provider } from 'react-redux';
import createStore from './store';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import { ResumeProvider } from './context/ResumeContext';

const store = createStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <ResumeProvider>
      <App />
    </ResumeProvider>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
