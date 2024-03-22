import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import { router } from './router';
import { RouterProvider } from 'react-router-dom';

const rootDiv = document.querySelector('#root');

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
