import './assets/styles.scss';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';

export default function Header(): JSX.Element {
  return (
    <header className='header-container'>
      <div className='header'>
        <span className='header-logo'>UniSTORE</span>
        <HeaderMenu />
        <HeaderSearch />
      </div>
    </header>
  );
}
