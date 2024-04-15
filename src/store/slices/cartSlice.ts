import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, CartProps } from './types';
import { Product } from '@chec/commerce.js/types/product';

const initialState: CartProps = {
  items: [],
};

const cartSlice = createSlice({
  name: Slices.Cart,
  initialState,
  reducers: {
    addToCart(state: CartProps, action: PayloadAction<Product>): void {
      state.items.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
