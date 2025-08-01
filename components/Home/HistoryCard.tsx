import { PageHistoryHistoryItems } from '@/tina/__generated__/types';
import React from 'react';

interface HistoryCardProps {
  historyItem: PageHistoryHistoryItems;
  index: number;
  cardHeightClass: string;
  filledItemIndex: number;
  lastItem: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

const HistoryCard = React.forwardRef<HTMLDivElement, HistoryCardProps>(
  ({ historyItem, index, cardHeightClass, filledItemIndex, lastItem }, ref) => {
    const isActive = index <= filledItemIndex;
    return (
      <div
        ref={ref}
        className={`relative flex w-full flex-col items-center gap-y-[25px] ${cardHeightClass} lg:flex-row lg:justify-between lg:gap-y-0`}
      >
        <div
          className={`relative z-10 mt-[1rem] w-[70%] transition-opacity duration-500 lg:mt-[1rem] lg:w-1/2 lg:px-[50px] ${
            isActive ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <h4 className="font-makarony text-champagne-gold text-[38px] font-normal lg:text-center lg:text-[5.25rem]">
            {historyItem?.year}
          </h4>
        </div>
        <div
          className={`relative z-10 w-[70%] transition-opacity duration-500 lg:w-1/2 lg:px-[50px] ${
            isActive ? 'opacity-100' : 'opacity-50'
          }`}
        >
          <p className="font-makarony text-eagle-navy mb-[10px] text-[21px] leading-[140%] lg:text-[24px]">
            {historyItem?.heading}
          </p>
          {historyItem?.subHeadingOne && (
            <p className="font-monaSans text-eagle-navy text-slate text-[16px] leading-[160%]">
              {historyItem?.subHeadingOne}
            </p>
          )}
          {historyItem?.subHeadingTwo && (
            <p className="font-monaSans text-eagle-navy text-slate text-[16px] leading-[160%]">
              {historyItem?.subHeadingTwo}
            </p>
          )}
          {historyItem?.subHeadingThree && (
            <p className="font-monaSans text-eagle-navy text-slate text-[16px] leading-[160%]">
              {historyItem?.subHeadingThree}
            </p>
          )}
          {historyItem?.subHeadingFour && (
            <p className="font-monaSans text-eagle-navy text-slate text-[16px] leading-[160%]">
              {historyItem?.subHeadingFour}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default HistoryCard;
