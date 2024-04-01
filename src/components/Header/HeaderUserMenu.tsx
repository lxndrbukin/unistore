import { Link } from 'react-router-dom';
import { PiUserCircle } from 'react-icons/pi';
import { IoSettingsOutline, IoLogOutOutline } from 'react-icons/io5';

export default function HeaderUserMenu(): JSX.Element {
  return (
    <div className="header-user-menu">
      <Link to="/profile" className="header-user-menu-data">
        <PiUserCircle size={38} />
        <span>firstName lastName</span>
      </Link>
      <ul className="header-user-menu-links">
        <li className="header-user-menu-link">
          <Link to="/profile/settings">
            <IoSettingsOutline size={20} />
            <span>Settings</span>
          </Link>
        </li>
        <li className="header-user-menu-link">
          <Link to="/profile/signout">
            <IoLogOutOutline size={21} />
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
