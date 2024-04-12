import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/Home/Home';
import Products from '../components/Products/Products';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: '/products/:category',
        element: <Products />,
      },
    ],
  },
]);
