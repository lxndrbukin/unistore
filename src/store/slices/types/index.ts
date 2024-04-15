import { Product } from '@chec/commerce.js/types/product';
import { Category } from '@chec/commerce.js/types/category';
import { Asset } from '@chec/commerce.js/types/asset';

export enum Slices {
  Catalog = 'catalog',
  Cart = 'cart',
}

export interface SubCategory {
  assets: Array<Asset>;
  id: string;
  name: string;
  slug: string;
}

export interface CatalogCategory extends Category {
  children: Array<SubCategory>;
}

export interface CatalogProps {
  products: Array<Product>;
  categories: Array<CatalogCategory>;
  filter: {
    search: string;
    price: {
      min: number | undefined;
      max: number | undefined;
    };
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartProps {
  items: Array<CartItem>;
}
