import { Product } from '@chec/commerce.js/types/product';

export default function ProductsGridItem({
  name,
  price,
  image,
}: Product): JSX.Element {
  return (
    <div className="products-grid-item">
      <img alt={name} src={image?.url} />
      <div className="products-grid-item-line">
        <span className="products-grid-item-name">{name}</span>
        <span className="products-grid-item-price">
          {price.formatted_with_symbol}
        </span>
      </div>
    </div>
  );
}
