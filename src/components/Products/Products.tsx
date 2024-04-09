import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, getProducts } from '../../store';
import ProductsGrid from './ProductsGrid';
import ProductsFilter from './ProductsFilter';

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProducts());
    console.log(searchParams.get('search'));
  }, []);

  return (
    <div className="products">
      <ProductsFilter />
      <ProductsGrid />
    </div>
  );
}
