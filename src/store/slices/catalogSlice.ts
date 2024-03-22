import { createSlice } from '@reduxjs/toolkit';
import { CatalogProps } from './types';
import { getProducts } from '../thunks/getProducts';

const initialState: CatalogProps = {
  products: []
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  }
});

export default catalogSlice.reducer;