import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  RootState,
  CartProps,
  AppDispatch,
  getTotalQuantity,
} from '../../store';
import HeaderUserSection from './HeaderUserSection';
import HeaderUserMenu from './HeaderUserMenu';
import HeaderUserCart from './HeaderUserCart';
import { PiUserCircleLight, PiShoppingCartLight } from 'react-icons/pi';

export default function HeaderUserSections(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { totalQuantity } = useSelector(
    (state: RootState): CartProps => state.cart
  );

  useEffect(() => {
    dispatch(getTotalQuantity());
  }, [totalQuantity]);

  const cartBadge = (
    <span className='header-user-section-badge'>{totalQuantity}</span>
  );

  return (
    <div className='header-user-sections'>
      <HeaderUserSection
        icon={PiUserCircleLight}
        children={<HeaderUserMenu />}
      />
      <HeaderUserSection
        icon={PiShoppingCartLight}
        children={<HeaderUserCart />}
        badge={totalQuantity !== 0 && cartBadge}
      />
    </div>
  );
}
