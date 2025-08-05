import React from 'react';
import { Maybe, NavigationHeaderSubLinks } from '@/tina/__generated__/types';
import Link from 'next/link';

const NavSubLinks = ({
  subLinks,
  onLinkClick,
}: {
  subLinks: Maybe<Maybe<NavigationHeaderSubLinks>[]> | undefined;
  onLinkClick?: () => void;
}) => {
  return (
    <div className="font-makarony text-frosted-white px-[25px] lg:px-[50px]">
      <nav className="flex flex-col items-center justify-center gap-[10px] opacity-50 lg:flex-row lg:gap-[50px]">
        {subLinks?.map((subLink, index) => (
          <Link
            key={index}
            href={subLink?.href || '#'}
            className="text-frosted-white text-center text-[22px] leading-loose"
            onClick={onLinkClick}
          >
            {subLink?.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavSubLinks;
