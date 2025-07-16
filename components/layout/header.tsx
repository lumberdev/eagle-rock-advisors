'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { NavigationHeader } from '@/tina/__generated__/types';
import NavMenu from './nav/NavMenu';
import Navbar from './Navbar';

interface HeaderProps {
  data?: NavigationHeader | null;
  headerClassName?: string;
  lightNavbar?: boolean;
}

export function Header({ data, headerClassName, lightNavbar }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      // Always show navbar when at top of page
      if (currentScrollY === 0) {
        setIsScrolled(false);
        setIsVisible(true);
        return;
      }
      // Scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      // Update last scroll position
      setLastScrollY(currentScrollY);
      if (currentScrollY > 200) {
        setIsScrolled(true);
      }
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-y-hidden', 'preventScroll');
    } else {
      document.body.classList.remove('overflow-y-hidden', 'preventScroll');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar, { passive: true });
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [controlNavbar]);

  if (!data) return null;

  return (
    <header
      className={`top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-[110%]'
      } ${isScrolled ? 'bg-eagle-navy fixed' : 'absolute bg-transparent'} ${headerClassName}`}
    >
      <div className="w-full">
        <Navbar
          data={data}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          lightNavbar={lightNavbar}
          isScrolled={isScrolled}
        />
        <NavMenu data={data} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
}
