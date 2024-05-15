import { configureStore } from '@reduxjs/toolkit';
import systemReducer from './slices/systemSlice';
import catalogReducer from './slices/catalogSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    system: systemReducer,
    catalog: catalogReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './slices/types';
export * from './slices/systemSlice';
export * from './slices/catalogSlice';
export * from './slices/cartSlice';
export * from './thunks/getProducts';
export * from './thunks/getCategories';
export * from './thunks/getCategory';
