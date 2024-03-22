import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './components/App';

const rootDiv = document.querySelector('#root');

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
