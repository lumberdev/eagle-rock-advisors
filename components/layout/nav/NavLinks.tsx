import React from 'react';
import Link from 'next/link';
import { Maybe, NavigationHeaderLinks } from '@/tina/__generated__/types';
import LinkArrow from '@/public/icons/link_arrow.svg';

const NavLinks = ({ 
  links, 
  onLinkClick 
}: { 
  links: Maybe<Maybe<NavigationHeaderLinks>[]> | undefined;
  onLinkClick?: () => void;
}) => {
  return (
    <nav className="flex flex-col items-center justify-center gap-[10px] px-[25px] lg:px-[50px]">
      {links?.map((link, index) => (
        <Link 
          key={index} 
          href={link?.href || '#'} 
          className="group flex items-center gap-2"
          onClick={onLinkClick}
        >
          <span className="font-dreaming text-[38px] leading-[120%] text-white transition-all duration-300 lg:text-[68px]">
            {link?.label}
          </span>
          <div
            className={`opacity-0 transition-all duration-300 ease-in-out ${link?.isExternal ? 'group-hover:opacity-100' : ''}`}
          >
            <LinkArrow
              alt="Arrow"
              className={`${link?.isExternal ? 'group-hover:animate-[bounce-horizontal_1s_ease-out_infinite]' : ''}`}
            />
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
