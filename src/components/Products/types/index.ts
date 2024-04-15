import { Product } from '@chec/commerce.js/types/product';

export interface ProductGridItemProps extends Product {
  handleClick: (product: Product) => void;
}

export interface ProductsGridProps {
  products: Array<Product>;
}

export interface ProductsFilterPriceInputProps {
  name: string;
  currency: string;
}
