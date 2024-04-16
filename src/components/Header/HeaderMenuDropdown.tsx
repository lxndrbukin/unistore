import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getCategories } from '../../store';
import {
  CatalogCategory,
  SubCategory,
  CatalogProps,
} from '../../store/slices/types';

export default function HeaderMenuDropdown(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector(
    (state: RootState): CatalogProps => state.catalog
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const renderSubCategories = (
    category: CatalogCategory
  ): Array<JSX.Element> => {
    return category.children.map((subCategory: SubCategory): JSX.Element => {
      return (
        <li className='header-menu-dropdown-sublink' key={subCategory.id}>
          <Link to={`/products/${category.slug}/${subCategory.slug}`}>
            {subCategory.name}
          </Link>
        </li>
      );
    });
  };

  const renderedCategories = categories.map(
    (category: CatalogCategory): JSX.Element => {
      return (
        <li key={category.id} className='header-menu-dropdown-link'>
          <Link to={`/products/${category.name.toLowerCase()}`}>
            {category.name}
          </Link>
          <ul className='header-menu-dropdown-sublinks'>
            {renderSubCategories(category)}
          </ul>
        </li>
      );
    }
  );

  return (
    <ul className='header-menu-dropdown-links'>
      <Link to='/products'>All Products</Link>
      {renderedCategories}
    </ul>
  );
}
