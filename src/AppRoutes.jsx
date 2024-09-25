import { Fragment, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutPage from './Pages/About/AboutPage'
import NotFoundPage from './Pages/ErrorPages/NotFoundPage'
import ContactPage from './Pages/Contact/ContactPage';
import HomePage from './Pages/Home/HomePage';
import ProjectPage from './Pages/Project/ProjectPage';
import ServicePage from './Pages/Service/ServicePage';
import SkillsPage from './Pages/Skills/Skills';

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
      <Suspense fallback={<h1>loading</h1>}>
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
  )
}

export default AppRoutes;
