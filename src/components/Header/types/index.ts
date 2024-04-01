import { RefObject, ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface HeaderUserMenuDropdownProps {
  ref: RefObject<HTMLDivElement>;
}

export interface HeaderUserMenuSectionProps {
  icon: IconType;
  children: ReactNode;
}
