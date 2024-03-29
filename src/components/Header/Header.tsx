import './assets/styles.scss';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderUserMenu from './HeaderUserMenu';

export default function Header(): JSX.Element {
  return (
    <header className='header-container'>
      <div className='header'>
        <Link to='/' className='header-logo'>
          uSTORE
        </Link>
        <HeaderMenu />
        <HeaderSearch />
        <HeaderUserMenu />
      </div>
    </header>
  );
}
