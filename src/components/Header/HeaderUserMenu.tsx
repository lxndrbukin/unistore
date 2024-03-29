import { PiUserCircle, PiShoppingCart } from 'react-icons/pi';

export default function HeaderUserMenu(): JSX.Element {
  return (
    <div className='header-user-menu'>
      <div className='header-user-menu-profile'>
        <PiUserCircle size={24} />
      </div>
      <div className='header-user-menu-cart'>
        <PiShoppingCart size={24} />
      </div>
    </div>
  );
}
