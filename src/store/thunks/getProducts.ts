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
        if (
          product.name.toLowerCase().includes(lowerSearch) ||
          product.categories.filter((category): boolean =>
            category.name.toLowerCase().includes(lowerSearch)
          ) ||
          product.description.toLowerCase().includes(lowerSearch)
        ) {
          console.log(product);
          return product;
        }
      });
      return filteredRes;
    }
    return res.data;
  }
);
