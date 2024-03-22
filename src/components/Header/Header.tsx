import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className='header-container'>
      <div className='header'>
        <span>UniSTORE</span>
      </div>
      <ul className='header-links'>
        <li>Categories</li>
        <li>Categories</li>
      </ul>
    </header>
  );
}
