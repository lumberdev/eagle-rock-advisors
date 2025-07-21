import React from 'react';
import { NavigationFooter } from '@/tina/__generated__/types';
import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  data?: NavigationFooter | null;
}

export function Footer({ data }: FooterProps) {
  if (!data) return null;

  return (
    <footer className="bg-eagle-navy flex flex-col gap-[50px] px-[25px] py-[50px] text-white lg:gap-[25px] lg:px-[50px] lg:py-[25px]">
      <div className="flex w-full items-center justify-between gap-[100px]">
        {/* Logo */}
        {data.logo?.src && (
          <Image
            src={data.logo.src}
            alt={data.logo.alt || 'Logo'}
            className="order-2 h-12 w-auto self-start lg:order-1"
            width={100}
            height={100}
          />
        )}
        <div className="font-makarony order-1 flex w-full flex-col items-start justify-between gap-[25px] lg:order-2 lg:flex-row lg:items-center">
          {data.links?.map((link, index) => (
            <Link
              key={index}
              href={link?.href || '#'}
              target={link?.isExternal ? '_blank' : ''}
              className="text-[22px] text-white"
            >
              {link?.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Sub Links */}
      <div className="font-monaSans flex w-full flex-col justify-between tracking-wider uppercase lg:flex-row lg:items-center">
        <p className="text-steel-blue text-xs leading-loose">{data.copyright}</p>
        <div className="flex items-center">
          {data?.subLinks?.map((link, index, array) => (
            <div key={index} className="leading-loose">
              <Link
                href={link?.href || '#'}
                target={link?.isExternal ? '_blank' : ''}
                className="text-steel-blue text-xs"
              >
                {link?.label}
              </Link>
              <span
                className={`text-steel-blue mx-[0.5rem] text-xs ${index === array?.length - 1 ? 'hidden' : ''}`}
              >
                |
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
