import { createBrowserRouter } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import { PublicLayout } from '../layouts';
import { Home, About, Contact, Blog, NotFound, Login, Registration, Profile, Post, Dashboard, DashboardPost, DashboardSettings } from '../pages'
import PrivateLayout from '../layouts/PrivatLayout';

export const routes = createBrowserRouter ([
 {
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/posts/:id',
      element: <Post />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
 },
 {
  element: <AuthRoute redirectPath={'/dashboard'} />,
  children: [
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/registration',
          element: <Registration />
        },
      ]
    }
  ]
  },
  {
    element: <PrivateRoute redirectPath={'/'} />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/dashboard/posts',
            element: <DashboardPost />
          },
          {
            path: '/dashboard/settings',
            element: <DashboardSettings />
          },
          {
            path: '/profile',
            element: <Profile />
          },
        ]
      }
    ]
  },
])