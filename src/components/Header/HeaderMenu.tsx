import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import HeaderMenuDropdown from './HeaderMenuDropdown';

export default function HeaderMenu(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const onMouseEvent = () => {
    setIsVisible(!isVisible);
  };

  const dropdownBackground = <div className='header-menu-dropdown-bg'></div>;

  return (
    <nav className='header-menu'>
      <ul className='header-menu-links'>
        <li
          onMouseEnter={onMouseEvent}
          onMouseLeave={onMouseEvent}
          className='header-menu-link'
        >
          Categories <BiChevronDown size={19} />
          {isVisible && <HeaderMenuDropdown />}
        </li>
        <li className='header-menu-link'>
          <Link to='/new-products'>What's New</Link>
        </li>
        <li className='header-menu-link'>
          <Link to='/deals'>Deals</Link>
        </li>
      </ul>
      {isVisible && dropdownBackground}
    </nav>
  );
}
