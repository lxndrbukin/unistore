import { Product } from '@chec/commerce.js/types/product';
import { Category } from '@chec/commerce.js/types/category';

export interface CatalogProps {
  products: Array<Product>;
  categories: Array<Category>;
}