import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CatalogProps } from './types';
import { Product } from '@chec/commerce.js/types/product';
import { Category } from '@chec/commerce.js/types/category';
import { getProducts } from '../thunks/getProducts';
import { getCategories } from '../thunks/getCategories';
import { getCategory } from '../thunks/getCategory';

const initialState: CatalogProps = {
  products: [],
  categories: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
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
