import { Link } from 'react-router-dom';

export default function HeaderMenu(): JSX.Element {
  return (
    <nav className="header-menu">
      <ul className="header-menu-links">
        <li className="header-menu-link">Categories</li>
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
