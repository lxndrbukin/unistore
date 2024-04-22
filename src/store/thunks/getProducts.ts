import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@chec/commerce.js/types/product';
import commerce from '../../lib/commerce';

export const getProducts = createAsyncThunk('catalog/getProducts', async (search?: string) => {
  const res = await commerce.products.list();
  if (search) {
    const filteredRes = res.data.filter((product: Product) => {
      if (product.name.toLowerCase().includes(search) ||
        product.categories.filter((category): boolean => category.name.includes(search)) ||
        product.description.toLowerCase().includes(search)) {
        return product;
      }
      return;
    });
    return filteredRes;
  }
  return res.data;
});
