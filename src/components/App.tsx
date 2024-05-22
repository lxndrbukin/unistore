import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, getCategories, setCurrentPath } from '../store';
import Header from './Header/Header';

export default function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const pathname = window.location.pathname;

  useEffect(() => {
    dispatch(getCategories());
    document.title = 'uniSTORE | PCs, Laptops, Smartphones, Consoles';
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentPath(pathname));
  }, [pathname]);

  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="main-body">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
