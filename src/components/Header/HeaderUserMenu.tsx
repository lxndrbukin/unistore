import { PiUserCircle, PiShoppingCart } from 'react-icons/pi';
import HeaderUserMenuDropdown from './HeaderUserMenuDropdown';

export default function HeaderUserMenu(): JSX.Element {
  return (
    <div className='header-user-menu'>
      <div className='header-user-menu-profile'>
        <PiUserCircle size={25} />
        {/* <HeaderUserMenuDropdown /> */}
      </div>
      <div className='header-user-menu-cart'>
        <PiShoppingCart size={25} />
        <div className='header-user-menu-cart-dropdown'></div>
      </div>
    </div>
  );
}
