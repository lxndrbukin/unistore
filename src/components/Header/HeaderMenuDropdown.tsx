import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getCategories } from '../../store';
import { Category } from '@chec/commerce.js/types/category';
import { CatalogProps } from '../../store/slices/types';

export default function HeaderMenuDropdown(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector(
    (state: RootState): CatalogProps => state.catalog
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const renderedCategories = categories.map(
    (category: Category): JSX.Element => {
      return (
        <li key={category.name} className='header-menu-dropdown-link'>
          <Link to={`/${category.name}`}>{category.name}</Link>
        </li>
      );
    }
  );

  return <ul className='header-menu-dropdown-links'>{renderedCategories}</ul>;
}
