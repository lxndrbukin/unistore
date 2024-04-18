import { useState, useEffect, useRef } from 'react';
import { HeaderUserMenuSectionProps } from './types';

export default function HeaderUserSection({
  icon,
  badge,
  children,
}: HeaderUserMenuSectionProps): JSX.Element {
  const iconRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return (): void =>
      document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleOutsideClick = (e: MouseEvent): void => {
    if (
      iconRef &&
      !iconRef.current?.contains(e.target as Element) &&
      !dropdownRef.current?.contains(e.target as Element)
    ) {
      setIsVisible(false);
    }
  };

  const headerUserSectionDropdown = (
    <div ref={dropdownRef} className='header-user-section-dropdown'>
      {children}
    </div>
  );

  return (
    <div className='header-user-section'>
      <div
        ref={iconRef}
        onClick={() => setIsVisible(!isVisible)}
        className={`header-user-section-icon ${isVisible ? 'active' : ''}`}
      >
        {icon({ size: 32 })}
        {badge}
      </div>
      {isVisible && headerUserSectionDropdown}
    </div>
  );
}
