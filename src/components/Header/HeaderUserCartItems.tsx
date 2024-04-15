import { useSelector } from 'react-redux';
import { RootState, CartProps } from '../../store';
import { Product } from '@chec/commerce.js/types/product';
import HeaderUserCartItem from './HeaderUserCartItem';

export default function HeaderUserCartItems(): JSX.Element {
  const { items } = useSelector((state: RootState): CartProps => state.cart);

  const renderedItems = items.map((item: Product) => {
    return <HeaderUserCartItem {...item} />;
  });

  return <div className="header-user-cart-items">{renderedItems}</div>;
}
