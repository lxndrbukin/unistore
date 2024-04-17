import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Operator, CartProps, CartItem } from './types';

const initialState: CartProps = {
  items: JSON.parse(localStorage.getItem('cartItems')!) || [],
};

const cartSlice = createSlice({
  name: Slices.Cart,
  initialState,
  reducers: {
    removeItem(state: CartProps, action: PayloadAction<{ id: string }>): void {
      const updatedList = state.items.filter(
        (item: CartItem): boolean => item.id !== action.payload.id
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedList));
      state.items = updatedList;
    },
    changeQuantity(
      state: CartProps,
      action: PayloadAction<{ id: string; operator: string }>
    ): void {
      if (
        state.items.some(
          (item: CartItem): boolean => item.id === action.payload.id
        )
      ) {
        const updatedList = state.items.map((item: CartItem): CartItem => {
          if (action.payload.operator === Operator.Increment) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else if (action.payload.operator === Operator.Decrement) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedList));
        state.items = updatedList;
      }
    },
    addToCart(state: CartProps, action: PayloadAction<CartItem>): void {
      if (
        state.items.some(
          (item: CartItem): boolean => item.id === action.payload.id
        )
      ) {
        const updatedList = state.items.map((item: CartItem): CartItem => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
        localStorage.setItem('cartItems', JSON.stringify(updatedList));
        state.items = updatedList;
      } else {
        state.items.push(action.payload);
        localStorage.setItem('cartItems', JSON.stringify(state.items));
      }
    },
  },
});

export default cartSlice.reducer;
export const { changeQuantity, addToCart, removeItem } = cartSlice.actions;
