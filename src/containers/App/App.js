import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import mixpanel from 'mixpanel-browser';
import { MIXPANEL_PROJECT_TOKEN } from '../../assets/constants';
import { ResumeProvider } from '../../context/ResumeContext';
import Loader from '../LoadingSpinner/LoadingSpinner';
import createStore from '../../store';

mixpanel.init(MIXPANEL_PROJECT_TOKEN, { debug: true });
mixpanel.track('page loaded');

const InfoLayout = lazy(() => import('../Layout/InfoLayout'));
const DisplayLayout = lazy(() => import('../Layout/DisplayLayout'));

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <ResumeProvider>
          <Routes>
            <Route path="/" element={<InfoLayout />} />
            <Route path="/gallery" element={<DisplayLayout />} />
          </Routes>
        </ResumeProvider>
      </Suspense>
    </Provider>
  );
}
