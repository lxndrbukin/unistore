import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, getProducts } from '../../store';
import ProductsGrid from './ProductsGrid';
import ProductsFilter from './ProductsFilter';

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="products">
      <ProductsFilter />
      <ProductsGrid />
    </div>
  );
}
