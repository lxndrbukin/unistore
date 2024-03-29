import './assets/styles.scss';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderUserMenu from './HeaderUserMenu';

export default function Header(): JSX.Element {
  return (
    <header className='header-container'>
      <div className='header'>
        <span className='header-logo'>UniSTORE</span>
        <HeaderMenu />
        <HeaderSearch />
        <HeaderUserMenu />
      </div>
    </header>
  );
}
