import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, getProducts, getCategories } from '../store';
import Header from './Header/Header';

export default function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <main className="main-body">
        <Outlet />
      </main>
    </div>
  );
}
