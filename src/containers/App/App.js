import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ResumeProvider } from '../../context/ResumeContext';
import Loader from '../LoadingSpinner/LoadingSpinner';
import createStore from '../../store';

const InfoLayout = lazy(() => import('../Layout/InfoLayout'));
const DisplayLayout = lazy(() => import('../Layout/DisplayLayout'));

const store = createStore();
const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <ResumeProvider>
          <Routes history={history}>
            <Route path="/" element={<InfoLayout />} />
            <Route path="/gallery" element={<DisplayLayout />} />
          </Routes>
        </ResumeProvider>
      </Suspense>
    </Provider>
  );
}
