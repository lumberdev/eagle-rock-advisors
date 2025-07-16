import React from 'react';

const InvestmentCardItem = ({
  card,
}: {
  card: {
    heading: string;
    subHeading: string;
    backgroundColor: string;
    textColor: string;
  };
}) => {
  return (
    <div className="sticky top-[20%] left-0 flex items-center justify-center pb-[50px]">
      <div
        className="flex h-[500px] min-h-[500px] w-[100%] flex-col items-start justify-between p-[25px] lg:p-[50px]"
        style={{ backgroundColor: card?.backgroundColor }}
      >
        <h3
          className="font-dreaming max-w-[15ch] text-[24px] leading-[140%] lg:max-w-[28ch] lg:text-[48px]"
          style={{ color: card?.textColor }}
        >
          {card?.heading}
        </h3>
        <p
          className="font-monaSans text-[.875rem] md:text-[1.375rem]"
          style={{ color: card?.textColor }}
        >
          {card?.subHeading}
        </p>
      </div>
    </div>
  );
};

export default InvestmentCardItem;
