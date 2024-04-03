import { createAsyncThunk } from '@reduxjs/toolkit';
import commerce from '../../lib/commerce';

export const getCategory = createAsyncThunk(
  'categories/getCategory',
  async (id: string) => {
    const res = await commerce.categories.retrieve(id);
    console.log(res);
  }
);
