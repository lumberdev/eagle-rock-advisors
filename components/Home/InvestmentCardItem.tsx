import React from 'react';
import { PageInvestmentCardsInvestmentCardsItems } from '@/tina/__generated__/types';

interface InvestmentCardItemProps {
  card: NonNullable<PageInvestmentCardsInvestmentCardsItems>;
}

const InvestmentCardItem = ({ card }: InvestmentCardItemProps) => {
  return (
    <div className="sticky top-[20%] left-0 flex items-center justify-center pb-[25px] lg:pb-[50px]">
      <div
        className="flex h-[448px] min-h-[500px] w-[100%] flex-col items-start justify-between p-[25px] lg:h-[500px] lg:p-[50px]"
        style={{ backgroundColor: card?.backgroundColor || '' }}
      >
        <h3
          className="font-makarony max-w-[15ch] text-[24px] leading-[140%] lg:max-w-[28ch] lg:text-[48px]"
          style={{ color: card?.textColor || '' }}
        >
          {card?.heading}
        </h3>
        <p
          className="font-monaSans max-w-[30ch] text-[15px] md:text-[1.375rem] lg:max-w-full"
          style={{ color: card?.textColor || '' }}
        >
          {card?.subHeading}
        </p>
      </div>
    </div>
  );
};

export default InvestmentCardItem;
