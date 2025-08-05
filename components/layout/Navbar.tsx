import React from 'react';
import Logo from './nav/Logo';
import { NavigationHeader } from '@/tina/__generated__/types';
import Hamburger from '@/public/icons/hamburger_menu.svg';
import Close from '@/public/icons/close.svg';

const Navbar = ({
  data,
  isMenuOpen,
  setIsMenuOpen,
  lightNavbar,
  isScrolled,
}: {
  data: NavigationHeader;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  lightNavbar?: boolean;
  isScrolled?: boolean;
}) => {
  const menuClassName = `${lightNavbar && !isScrolled ? 'text-eagle-navy' : 'text-white'} h-[20px] w-[20px] transition-all duration-[1000ms]`;

  return (
    <div className="flex w-full items-center justify-between px-[25px] py-[35px] lg:px-[50px] lg:py-[50px]">
      {/* Logo */}
      <Logo
        logo={data?.logo}
        style={lightNavbar && !isScrolled ? 'text-eagle-navy' : 'text-white'}
      />
      <div
        className={`flex cursor-pointer items-center justify-center border-1 ${lightNavbar && !isScrolled ? 'border-eagle-navy' : 'border-white'} p-[15px]`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Close
          className={`${menuClassName} ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}`}
        />
        <Hamburger
          className={`${menuClassName} ${isMenuOpen ? 'hidden opacity-0' : 'block opacity-100'}`}
        />
      </div>
    </div>
  );
};

export default Navbar;
