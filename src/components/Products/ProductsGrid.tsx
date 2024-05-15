import { ProductsGridProps } from './types';
import { Product } from '@chec/commerce.js/types/product';
import ProductsGridItem from './ProductsGridItem';

export default function ProductsGrid({
  products,
}: ProductsGridProps): JSX.Element {
  const itemLoader = <div className="products-grid-item-loader"></div>;

  const loadingGrid = Array(6).fill(itemLoader);

  const productsGrid = products.map((product: Product): JSX.Element => {
    return <ProductsGridItem key={product.id} {...product} />;
  });

  const grid = products.length ? productsGrid : loadingGrid;

  return <div className="products-grid">{grid}</div>;
}
