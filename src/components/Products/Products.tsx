import './assets/styles.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getProducts } from '../../store';
import ProductsGrid from './ProductsGrid';
import ProductsFilter from './ProductsFilter';

export default function Products(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { products, filter } = useSelector((state: RootState) => state.catalog);

  useEffect(() => {
    const { search } = filter;
    if (search) dispatch(getProducts(search));
    else dispatch(getProducts());
  }, [filter.search]);

  return (
    <div className="products">
      <ProductsFilter />
      <ProductsGrid products={products} />
    </div>
  );
}
