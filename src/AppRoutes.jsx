import React, { Fragment, Suspense, lazy } from 'react';
import { Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const AboutPage = lazy(() => import('./Pages/About/AboutPage'));
const NotFoundPage = lazy(() => import('./Pages/ErrorPages/NotFoundPage'));
const ContactPage = lazy(() => import('./Pages/Contact/ContactPage'));
const HomePage = lazy(() => import('./Pages/Home/HomePage'));
const ProjectPage = lazy(() => import('./Pages/Project/ProjectPage'));
const ServicePage = lazy(() => import('./Pages/Service/ServicePage'));
const SkillsPage = lazy(() => import('./Pages/Skills/Skills'));

const PAGE_LIST = [
  {
    title: 'Home Page',
    component: <HomePage />,
    path: '/',
  },
  {
    title: 'About Page',
    component: <AboutPage />,
    path: '/about',
  },
  {
    title: 'Service Page',
    component: <ServicePage />,
    path: '/about',
  },
  {
    title: 'Skills Page',
    component: <SkillsPage />,
    path: '/about',
  },
  {
    title: 'Project Page',
    component: <ProjectPage />,
    path: '/project',
  },
  {
    title: 'Contact Page',
    component: <ContactPage />,
    path: '/contact',
  },
];

const AppRoutes = () => {
  return (
    <Fragment>
      <Suspense fallback={<Typography>loading</Typography>}>
        <Routes>
          <Route>
            {
              PAGE_LIST.map((page, idx) => <Route
                key={`${page.key}-${idx}`}
                path={page.path}
                element={page.component}
              />)
            }
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Fragment >
  );
};

export default AppRoutes;
