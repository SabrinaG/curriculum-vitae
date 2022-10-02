import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './containers/App/App';
import './assets/common.scss';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router
root.render(
  <Router>
    <App />
  </Router>,
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Router } from 'react-router';
// import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
// import createStore from './store';
// import Routes from './routes';
// import reportWebVitals from './reportWebVitals';
// import './assets/common.scss';
// import './index.css';

// // import App from './containers/App/App';
// // import { ResumeProvider } from './context/ResumeContext';

// const store = createStore();
// const history = createBrowserHistory();
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <Provider store={store} history={history}>
//     <Router history={history}>
//       {Routes()}
//     </Router>
//   </Provider>,
// );

// root.render(
//   <Provider store={store}>
//     <ResumeProvider>
//       <App />
//     </ResumeProvider>
//   </Provider>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
