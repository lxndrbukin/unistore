import { PiUserCircle, PiShoppingCart } from 'react-icons/pi';
import HeaderUserSection from './HeaderUserSection';
import HeaderUserMenu from './HeaderUserMenu';
import HeaderUserCart from './HeaderUserCart';

export default function HeaderUserSections(): JSX.Element {
  return (
    <div className="header-user-menu">
      <HeaderUserSection icon={PiUserCircle} children={<HeaderUserMenu />} />
      <HeaderUserSection icon={PiShoppingCart} children={<HeaderUserCart />} />
    </div>
  );
}
