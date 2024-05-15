import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, showDropdown } from '../../store';
import { BiChevronDown } from 'react-icons/bi';
import HeaderMenuDropdown from './HeaderMenuDropdown';

export default function HeaderMenu(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { showMenuDropdown } = useSelector(
    (state: RootState) => state.system.ui.header
  );

  const onMouseEvent = () => {
    dispatch(showDropdown(!showMenuDropdown));
  };

  return (
    <nav className="header-menu">
      <ul className="header-menu-links">
        <li
          onMouseEnter={onMouseEvent}
          onMouseLeave={onMouseEvent}
          className="header-menu-link"
        >
          Categories <BiChevronDown size={19} />
          {showMenuDropdown && <HeaderMenuDropdown />}
        </li>
        <li className="header-menu-link">
          <Link to="/new-products">What's New</Link>
        </li>
        <li className="header-menu-link">
          <Link to="/deals">Deals</Link>
        </li>
      </ul>
    </nav>
  );
}
