import { Link } from 'react-router-dom';
import { PiUserCircle } from 'react-icons/pi';
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';

export default function HeaderUserMenuDropdown(): JSX.Element {
  return (
    <div className='header-user-menu-profile-dropdown'>
      <Link to='/profile' className='header-user-menu-profile-data'>
        <PiUserCircle size={38} />
        <span>firstName lastName</span>
      </Link>
      <ul className='header-user-menu-profile-links'>
        <li className='header-user-menu-profile-link'>
          <Link to='/profile/settings'>
            <IoSettingsOutline size={20} />
            <span>Settings</span>
          </Link>
        </li>
        <li className='header-user-menu-profile-link'>
          <Link to='/profile/signout'>
            <IoLogOutOutline size={21} />
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
