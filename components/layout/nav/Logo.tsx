import { Maybe, NavigationHeaderLogo } from '@/tina/__generated__/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import EagleLogo from '@/public/icons/eagle_rocks_logo.svg';

const Logo = ({
  logo,
  style = '',
}: {
  logo: Maybe<NavigationHeaderLogo> | undefined;
  style?: string;
}) => {
  return (
    <Link href="/">
      <EagleLogo alt={logo?.alt || 'Logo'} className={style} />
    </Link>
  );
};

export default Logo;
