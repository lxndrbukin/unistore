import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, getCategories } from '../../store';
import { Category, SubCategory } from '@chec/commerce.js/types/category';
import { CatalogProps } from '../../store/slices/types';

export default function HeaderMenuDropdown(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { categories } = useSelector(
    (state: RootState): CatalogProps => state.catalog
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const renderedSubCategories = categories.map((category: Category) => {
    return category.children.map((subCategory: SubCategory): JSX.Element => {
      return (
        <li className="header-menu-dropdown-sublink" key={subCategory.id}>
          <Link
            to={`/${category.name.toLowerCase()}/${subCategory.name.toLowerCase()}`}
          >
            {subCategory.name}
          </Link>
        </li>
      );
    });
  });

  const renderedCategories = categories.map(
    (category: Category): JSX.Element => {
      return (
        <li key={category.id} className="header-menu-dropdown-link">
          <Link to={`/${category.name.toLowerCase()}`}>{category.name}</Link>
          <ul className="header-menu-dropdown-sublinks">
            {renderedSubCategories}
          </ul>
        </li>
      );
    }
  );

  return <ul className="header-menu-dropdown-links">{renderedCategories}</ul>;
}
