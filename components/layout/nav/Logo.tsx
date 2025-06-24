import { Maybe, NavigationHeaderLogo } from '@/tina/__generated__/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({
  logo,
  style = '',
}: {
  logo: Maybe<NavigationHeaderLogo> | undefined;
  style?: string;
}) => {
  return (
    logo?.src && (
      <Link href="/" className="flex-shrink-0">
        <Image
          src={logo?.src}
          alt={logo?.alt || 'Logo'}
          className={`h-[30px] w-auto lg:h-10 ${style}`}
          width={100}
          height={100}
        />
      </Link>
    )
  );
};

export default Logo;
