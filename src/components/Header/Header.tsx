import './assets/styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderUserSections from './HeaderUserSections';
import { RootState } from '../../store';

export default function Header(): JSX.Element {
  const { showMenuDropdown } = useSelector(
    (state: RootState) => state.system.ui.header
  );

  const dropdownBackground = <div className="header-menu-dropdown-bg"></div>;

  return (
    <header className="header-container">
      <div className="header">
        <Link to="/" className="header-logo">
          uniSTORE
        </Link>
        <HeaderMenu />
        <HeaderSearch />
        <HeaderUserSections />
      </div>
      {showMenuDropdown && dropdownBackground}
    </header>
  );
}
