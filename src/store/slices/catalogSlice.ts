import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, CatalogProps, CatalogCategory } from './types';
import { Product } from '@chec/commerce.js/types/product';
import { getProducts } from '../thunks/getProducts';
import { getCategories } from '../thunks/getCategories';

const initialState: CatalogProps = {
  products: [],
  categories: [],
  filter: {
    search: '',
    price: {
      min: undefined,
      max: undefined,
    }
  },
};

const catalogSlice = createSlice({
  name: Slices.Catalog,
  initialState,
  reducers: {
    setPrice(state: CatalogProps, action: PayloadAction<{ min?: number, max?: number; }>) {
      if (action.payload.min) {
        state.filter.price.min = action.payload.min;
      } else state.filter.price.min = undefined;
      if (action.payload.max) {
        state.filter.price.max = action.payload.max;
      } else state.filter.price.max = undefined;
    },
    setSearch(state: CatalogProps, action: PayloadAction<string>): void {
      const filteredProducts = state.products.filter((product: Product) => {
        if (product.name.toLowerCase().includes(action.payload) ||
          product.categories.filter((category): boolean => category.name.includes(action.payload)) ||
          product.description.toLowerCase().includes(action.payload)) {
          return product;
        }
        return;
      });
      state.products = filteredProducts;
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(
      getProducts.fulfilled,
      (state: CatalogProps, action: PayloadAction<Array<Product>>): void => {
        state.products = action.payload;
      }
    );
    builder.addCase(
      getCategories.fulfilled,
      (state: CatalogProps, action: PayloadAction<Array<CatalogCategory>>): void => {
        state.categories = action.payload;
      }
    );
  },
});

export default catalogSlice.reducer;
export const { setSearch, setPrice } = catalogSlice.actions;
