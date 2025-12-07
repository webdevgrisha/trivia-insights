import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from '../layouts';
import { NotFound } from '../pages/NotFound/NotFound';
import { Questions } from '../pages/Questions/Questions';
import { Statistic } from '../pages/Statistic/Statistic';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to="category/0/statistic" replace />,
    },
    {
      path: 'category/:categoryId',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="statistic" replace />,
        },
        {
          path: 'statistic',
          element: <Statistic />,
        },
        {
          path: 'questions',
          element: <Questions />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: '/trivia-insights',
  }
);

export { router };
