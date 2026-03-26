import React from 'react';
import Link from 'next/link';
import { Maybe, NavigationHeaderLinks } from '@/tina/__generated__/types';
import LinkArrow from '@/public/icons/link_arrow.svg';

const NavLinks = ({
  links,
  onLinkClick,
}: {
  links: Maybe<Maybe<NavigationHeaderLinks>[]> | undefined;
  onLinkClick?: () => void;
}) => {
  return (
    <nav className="flex flex-col items-center justify-center gap-[16px] px-[25px] lg:px-[50px]">
      {links?.map((link, index) => (
        <Link
          key={index}
          href={link?.href || '#'}
          className="group relative flex items-center gap-2"
          target={link?.isExternal ? '_blank' : ''}
          onClick={onLinkClick}
        >
          <h4 className="font-makarony text-[38px] leading-[120%] text-white transition-all duration-300 lg:text-[42px]">
            {link?.label}
          </h4>
          <div
            className={`opacity-0 transition-all duration-300 ease-in-out ${link?.isExternal ? 'group-hover:opacity-100' : ''}`}
          >
            <LinkArrow
              alt="Arrow"
              className={`absolute mt-[-47px] hidden lg:block ${link?.isExternal ? 'group-hover:animate-[bounce-horizontal_1s_ease-out_infinite]' : ''}`}
            />
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
