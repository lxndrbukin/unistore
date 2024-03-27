import HeaderMenu from './HeaderMenu';

export default function Header(): JSX.Element {
  return (
    <header className="header-container">
      <div className="header">
        <span>UniSTORE</span>
      </div>
      <HeaderMenu />
    </header>
  );
}
