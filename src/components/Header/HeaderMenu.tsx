import { Link } from 'react-router-dom';
import { BiChevronDown } from 'react-icons/bi';
import HeaderMenuDropdown from './HeaderMenuDropdown';

export default function HeaderMenu(): JSX.Element {
  const renderedDropdown = (
    <>
      <span>
        Categories <BiChevronDown size={19} />
      </span>
      <HeaderMenuDropdown />
    </>
  );

  return (
    <nav className='header-menu'>
      <ul className='header-menu-links'>
        <li className='header-menu-link'>{renderedDropdown}</li>
        <li className='header-menu-link'>
          <Link to='/new-products'>What's New</Link>
        </li>
        <li className='header-menu-link'>
          <Link to='/deals'>Deals</Link>
        </li>
      </ul>
    </nav>
  );
}
