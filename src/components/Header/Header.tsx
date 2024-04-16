import './assets/styles.scss';
import { Link } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import HeaderUserSections from './HeaderUserSections';

export default function Header(): JSX.Element {
  return (
    <header className='header-container'>
      <div className='header'>
        <Link to='/' className='header-logo'>
          uniSTORE
        </Link>
        <HeaderMenu />
        <HeaderSearch />
        <HeaderUserSections />
      </div>
    </header>
  );
}
