import { ProductsGridProps } from './types';
import { Product } from '@chec/commerce.js/types/product';
import ProductsGridItem from './ProductsGridItem';

export default function ProductsGrid({
  products,
}: ProductsGridProps): JSX.Element {
  const renderedGrid = products.map((product: Product): JSX.Element => {
    return <ProductsGridItem key={product.id} {...product} />;
  });

  return (
    <div className="products-grid">
      <h4 className="products-grid-header">
        Total Found Items: {products.length}
      </h4>
      {renderedGrid}
    </div>
  );
}
