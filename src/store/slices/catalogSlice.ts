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
    categories: [],
    price: {
      min: undefined,
      max: undefined,
    },
  },
};

const catalogSlice = createSlice({
  name: Slices.Catalog,
  initialState,
  reducers: {
    setPrice(
      state: CatalogProps,
      action: PayloadAction<{ min?: number; max?: number }>
    ): void {
      if (action.payload.min) {
        state.filter.price.min = action.payload.min;
      } else state.filter.price.min = undefined;
      if (action.payload.max) {
        state.filter.price.max = action.payload.max;
      } else state.filter.price.max = undefined;
    },
    setSearch(state: CatalogProps, action: PayloadAction<string>): void {
      state.filter.search = action.payload;
    },
    selectCategory(
      state: CatalogProps,
      action: PayloadAction<{ category: string; checked: boolean }>
    ): void {
      if (
        !state.filter.categories.includes(action.payload.category) &&
        action.payload.checked
      ) {
        state.filter.categories.push(action.payload.category);
      } else {
        const filtered = state.filter.categories.filter(
          (category) => category !== action.payload.category
        );
        state.filter.categories = filtered;
      }
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(
      getProducts.fulfilled,
      (state: CatalogProps, action: PayloadAction<Array<Product>>): void => {
        state.products = action.payload;
      }
    );
    builder.addCase(getProducts.pending, (state: CatalogProps): void => {
      state.products = [];
    });
    builder.addCase(
      getCategories.fulfilled,
      (
        state: CatalogProps,
        action: PayloadAction<Array<CatalogCategory>>
      ): void => {
        state.categories = action.payload;
      }
    );
  },
});

export default catalogSlice.reducer;
export const { setSearch, setPrice, selectCategory } = catalogSlice.actions;
