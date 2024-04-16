import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import App from '../components/App';
import Home from '../components/Home/Home';
import Products from '../components/Products/Products';
import Auth from '../components/Auth/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
        children: [
          {
            path: '/products/:category',
            element: <Products />,
          },
        ],
      },
      {
        path: 'auth',
        element: <Auth />,
      },
    ],
  },
]);
