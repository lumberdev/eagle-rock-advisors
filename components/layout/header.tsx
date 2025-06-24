'use client';
import React, { useEffect, useState } from 'react';
import { NavigationHeader } from '@/tina/__generated__/types';
import NavMenu from './nav/NavMenu';
import Navbar from './Navbar';

interface HeaderProps {
  data?: NavigationHeader | null;
}

export function Header({ data }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (!data) return null;
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-y-hidden', 'preventScroll');
    } else {
      document.body.classList.remove('overflow-y-hidden', 'preventScroll');
    }
  }, [isMenuOpen]);
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="w-full">
        <Navbar data={data} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <NavMenu data={data} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
