import { createSlice } from '@reduxjs/toolkit';
import { Slices, CartProps } from './types';

const initialState: CartProps = {
  items: [],
};

const cartSlice = createSlice({
  name: Slices.Cart,
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
