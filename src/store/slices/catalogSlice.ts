import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CatalogProps } from './types';
import { Product } from '@chec/commerce.js/types/product';
import { Category } from '@chec/commerce.js/types/category';
import { getProducts } from '../thunks/getProducts';
import { getCategories } from '../thunks/getCategories';

const initialState: CatalogProps = {
  products: [],
  categories: [],
  filter: {
    search: '',
  },
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setSearch(state: CatalogProps, action: PayloadAction<string>): void {
      state.filter.search = action.payload;
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
      (state: CatalogProps, action: PayloadAction<Array<Category>>): void => {
        state.categories = action.payload;
      }
    );
  },
});

export default catalogSlice.reducer;
export const { setSearch } = catalogSlice.actions;
