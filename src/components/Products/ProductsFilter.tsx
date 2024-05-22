import { useSelector } from 'react-redux';
import {
  RootState,
  CatalogCategory,
  SubCategory,
  CatalogProps,
} from '../../store';
import ProductsFilterPriceInput from './ProductsFilterPriceInput';
import { ChangeEvent } from 'react';

export default function ProductsFilter(): JSX.Element {
  const { products, categories } = useSelector(
    (state: RootState): CatalogProps => state.catalog
  );

  const renderSubCategories = (
    category: CatalogCategory
  ): Array<JSX.Element> => {
    return category.children.map((subCategory: SubCategory): JSX.Element => {
      return (
        <li className="products-filter-subcategory">
          <input
            onChange={checkBox}
            id={subCategory.name}
            name={subCategory.name.toLowerCase()}
            type="checkbox"
          />
          <label htmlFor={subCategory.name}>{subCategory.name}</label>
        </li>
      );
    });
  };

  const checkBox = (e: ChangeEvent<HTMLInputElement>) => {
    return products.map((product) => {
      if (
        e.target.checked &&
        product.categories.some(
          (category) => category.name.toLowerCase() === e.target.name
        )
      ) {
        console.log(product);
      }
      return;
    });
  };

  const renderedCategories = categories.map(
    (category: CatalogCategory): JSX.Element => {
      return (
        <li
          key={category.name.toLowerCase()}
          className="products-filter-category-wrapper"
        >
          <div className="products-filter-category">
            <input
              onChange={checkBox}
              type="checkbox"
              name={category.name.toLowerCase()}
              id={category.slug}
            />
            <label htmlFor={category.slug}>{category.name}</label>
          </div>
          <ul className="products-filter-category-subcategories">
            {renderSubCategories(category)}
          </ul>
        </li>
      );
    }
  );

  return (
    <div className="products-filter">
      <h3 className="products-filter-header">Filter</h3>
      <div className="products-filter-sections">
        <div className="products-filter-categories">
          <h5 className="products-filter-sub-header">Categories</h5>
          <ul className="products-filter-categories-list">
            {renderedCategories}
          </ul>
        </div>
        <div className="products-filter-prices">
          <h5 className="products-filter-sub-header">Price</h5>
          <div className="products-filter-prices-inputs">
            <ProductsFilterPriceInput currency="£" name="min" />
            <ProductsFilterPriceInput currency="£" name="max" />
          </div>
        </div>
      </div>
    </div>
  );
}
