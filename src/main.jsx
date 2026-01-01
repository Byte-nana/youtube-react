import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import './index.css';
import App from './App.jsx';
import NotFound from './pages/NotFound.jsx';
import Videos from './pages/Videos.jsx';
import VideoDetail from './pages/VideoDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Videos },
      { path: '/videos', Component: Videos },
      { path: '/videos/:keyword', Component: Videos },
      { path: '/videos/watch/:videoId', Component: VideoDetail },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
