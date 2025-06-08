import React from 'react';
import Arrow from '../../public/icons/arrow_right.svg';
import Link from 'next/link';

const CTAButton = ({
  cta,
  color = 'white',
  bgColor = '',
  style = '',
}: {
  cta: any;
  color?: string;
  bgColor?: string;
  style?: string;
}) => {
  return (
    <Link
      className={`font-monaSans uppercase bg-${bgColor} text-${color} border-[1px] text-[14px] leading-[140%] lg:text-[16px] border-${color} z-10 flex items-center justify-center py-[25px] pr-[20px] pr-[25px] pl-[30px] tracking-[2px] ${style}`}
      href={cta?.link}
    >
      {cta?.text}
      <Arrow alt="Arrow" className={`fill-${color}`} />
    </Link>
  );
};

export default CTAButton;
