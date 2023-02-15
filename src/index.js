import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './styles.css';
import Home, { loader as homeLoader } from './routes/home';
import Post, { loader as postLoader } from './routes/post';
import ErrorPage from './error-page';

const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: homeLoader,
  },
  {
    path: 'posts/:postId',
    element: <Post />,
    errorElement: <ErrorPage />,
    loader: postLoader,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
