import React from 'react';
import Arrow from '../../public/icons/arrow_right.svg';
import Link from 'next/link';

const CTAButton = ({
  cta,
  color = 'white',
  style = '',
}: {
  cta: any;
  color?: string;
  style?: string;
}) => {
  return (
    <Link
      className={`font-monaSans text-eagle-navy border-eagle-navy hover:bg-eagle-navy z-10 flex items-center justify-center border-[1px] py-[15px] pr-[20px] pr-[25px] pl-[30px] text-[14px] leading-[140%] tracking-[2px] uppercase transition-all duration-300 hover:text-white lg:text-[16px] ${style}`}
      href={cta?.link || '/'}
      target={cta?.isExternal ? '_blank' : ''}
    >
      {cta?.text}
      <Arrow alt="Arrow" className={`fill-${color}`} />
    </Link>
  );
};

export default CTAButton;
