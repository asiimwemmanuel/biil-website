import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Home from '../src/pages/Home/Home.jsx';
import ContextProvider from './Context/ContextProvider.jsx';
import './index.css';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: 'about',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      {/* <ParallaxProvider> */}
      <RouterProvider router={router} />
      {/* </ParallaxProvider> */}
    </ContextProvider>
  </React.StrictMode>
);
