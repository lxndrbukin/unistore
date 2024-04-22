import './assets/styles.scss';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getProducts } from '../../store';
import ProductsGrid from './ProductsGrid';
import ProductsFilter from './ProductsFilter';

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.catalog);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className='products'>
      <ProductsFilter />
      <ProductsGrid products={products} />
    </div>
  );
}
