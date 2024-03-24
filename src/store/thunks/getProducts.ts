import { createAsyncThunk } from '@reduxjs/toolkit';
import commerce from '../../lib/commerce';

export const getProducts = createAsyncThunk('catalog/getProducts', async () => {
  const res = await commerce.products.list();
  return res.data;
});