import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@chec/commerce.js/types/product';
import commerce from '../../lib/commerce';

export const getProducts = createAsyncThunk(
  'catalog/getProducts',
  async (search?: string) => {
    const res = await commerce.products.list();
    if (search?.length) {
      const lowerSearch = search.toLowerCase();
      const filteredRes = res.data.filter((product: Product) => {
        if (product.name.toLowerCase().includes(lowerSearch)) {
          console.log(product.name);
          return product;
        } else if (product.description.toLowerCase().includes(lowerSearch)) {
          return product;
        }
      });
      return filteredRes;
    }
    return res.data;
  }
);
