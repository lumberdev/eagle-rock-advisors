import React, { useState, useEffect } from 'react';
import InvestmentCardItem from './InvestmentCardItem';
import { PageInvestmentCards } from '@/tina/__generated__/types';

interface InvestmentCardsProps {
  investmentCardsData: PageInvestmentCards | null | undefined;
}

const InvestmentCards = ({ investmentCardsData }: InvestmentCardsProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerHeight = 500;
  const totalCards = investmentCardsData?.investmentCardsItems?.length || 0;

  return (
    <section className="px-[25px] pb-[100px] md:px-[100px]">
      <div className="gap-y-[50px]">
        {investmentCardsData?.investmentCardsItems?.map(
          (card, index) => card && <InvestmentCardItem key={index} card={card} />
        )}
      </div>
    </section>
  );
};

export default InvestmentCards;
