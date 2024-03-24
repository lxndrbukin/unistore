import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, getProducts, getCategories } from '../store';

export default function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  return <div className='container'>App</div>;
}
