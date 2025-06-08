'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Arrow from '../../public/icons/arrow_right.svg';

interface AccordionItem {
  heading: string;
  subheading: string;
}

interface ExpertiseProps {
  expertiseData: {
    heading: string;
    accordionItems: AccordionItem[];
  };
}

const Expertise: React.FC<ExpertiseProps> = ({ expertiseData }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!expertiseData?.accordionItems?.length) return null;

  return (
    <section className="text-steel-blue bg-frosted-white flex items-center justify-center px-[25px] py-[100px] md:px-[100px]">
      <div className="container w-full max-w-[1440px]">
        {expertiseData.heading && (
          <h2 className="font-monaSans mb-12 text-[1rem] leading-[140%] font-normal tracking-[2px]">
            {expertiseData.heading}
          </h2>
        )}

        <div className="flex flex-col items-center justify-center gap-[25px] md:gap-[50px]">
          {expertiseData.accordionItems.map((item, index) => (
            <div
              key={index}
              className="w-full overflow-hidden border-b border-[#5B728A40] pb-[25px] last:border-b-0 md:pb-[50px]"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="group flex w-full items-center justify-between text-left focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-eagle-navy font-dreaming text-xl font-normal md:text-[3.25rem]">
                  {item.heading}
                </h3>
                <Arrow
                  alt="Arrow"
                  className={`fill-eagle-navy ${activeIndex === index ? 'rotate-270' : 'rotate-90'} h-[20px] w-[20px] transform transition-transform duration-300 md:scale-200`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={activeIndex !== index}
              >
                <p className="font-monaSans mt-[20px] max-w-[38ch] text-[14px] md:max-w-[70ch] md:text-[22px]">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        [aria-expanded='true'] + div {
          transition:
            max-height 0.3s ease-in-out,
            opacity 0.2s ease-in-out;
        }
        [aria-expanded='false'] + div {
          transition:
            max-height 0.3s ease-in-out,
            opacity 0.2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Expertise;
