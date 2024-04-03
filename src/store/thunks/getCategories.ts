import { createAsyncThunk } from '@reduxjs/toolkit';
import commerce from '../../lib/commerce';

export const getCategories = createAsyncThunk(
  'catalog/getCategories',
  async () => {
    const res = await commerce.categories.list();
    return res.data;
  }
);
