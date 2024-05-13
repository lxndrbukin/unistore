import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@chec/commerce.js/types/product';
import commerce from '../../lib/commerce';

export const getProducts = createAsyncThunk(
  'catalog/getProducts',
  async (search?: string) => {
    const res = await commerce.products.list();
    if (search) {
      const lowerSearch = search.toLowerCase();
      const filteredRes = res.data.filter((product: Product) => {
        switch (true) {
          case product.name.toLowerCase().includes(lowerSearch):
            return product;
          case product.description.toLowerCase().includes(lowerSearch):
            return product;
          case product.categories.some((category) =>
            category.name.toLowerCase().includes(lowerSearch)
          ):
            return product;
          default:
            return;
        }
      });
      return filteredRes;
    }
    return res.data;
  }
);
