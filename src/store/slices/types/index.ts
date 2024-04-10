import { Product } from '@chec/commerce.js/types/product';
import { Category } from '@chec/commerce.js/types/category';

export enum Slices {
  Catalog = 'catalog',
  Cart = 'cart',
}

export interface CatalogProps {
  products: Array<Product>;
  categories: Array<Category>;
  filter: {
    search: string;
  };
}

export interface CartProps {
  items: Array<Product>;
}
