import { NavigationHeader } from '@/tina/__generated__/types';
import React from 'react';
import Navbar from '../Navbar';
import NavLinks from './NavLinks';
import NavSubLinks from './NavSubLinks';

const NavMenu = ({
  data,
  isMenuOpen,
  setIsMenuOpen,
}: {
  data: NavigationHeader;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`bg-slate fixed top-0 left-0 z-50 flex h-screen w-full flex-col items-center justify-between ${isMenuOpen ? 'top-0' : 'top-[-100vh]'} pb-[100px] transition-all duration-500`}
    >
      <Navbar data={data} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <NavLinks links={data?.links} onLinkClick={() => setIsMenuOpen(false)} />
      <NavSubLinks subLinks={data?.subLinks} onLinkClick={() => setIsMenuOpen(false)} />
    </div>
  );
};

export default NavMenu;
