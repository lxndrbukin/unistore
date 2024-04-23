import { useSelector } from 'react-redux';
import {
  RootState,
  CatalogCategory,
  SubCategory,
  CatalogProps,
} from '../../store';
import ProductsFilterPriceInput from './ProductsFilterPriceInput';

export default function ProductsFilter(): JSX.Element {
  const { categories } = useSelector(
    (state: RootState): CatalogProps => state.catalog
  );

  const renderSubCategories = (
    category: CatalogCategory
  ): Array<JSX.Element> => {
    return category.children.map((subCategory: SubCategory): JSX.Element => {
      return (
        <li className="products-filter-subcategory">
          <input id={subCategory.name} type="checkbox" />
          <label htmlFor={subCategory.name}>{subCategory.name}</label>
        </li>
      );
    });
  };

  const renderedCategories = categories.map(
    (category: CatalogCategory): JSX.Element => {
      return (
        <li className="products-filter-category-wrapper">
          <div className="products-filter-category">
            <input type="checkbox" id={category.slug} />
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
