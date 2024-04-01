import { useState, useEffect, useRef } from 'react';
import { HeaderUserMenuSectionProps } from './types';

export default function HeaderUserSection({
  icon,
  children,
}: HeaderUserMenuSectionProps): JSX.Element {
  const iconRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {}, []);

  const headerUserMenuDropdown = (
    <div ref={dropdownRef} className="header-user-menu-dropdown">
      {children}
    </div>
  );

  return (
    <div className="header-user-menu-section">
      <div ref={iconRef} className="header-user-menu-icon">
        {icon({ size: 28 })}
      </div>
      {isVisible && headerUserMenuDropdown}
    </div>
  );
}
