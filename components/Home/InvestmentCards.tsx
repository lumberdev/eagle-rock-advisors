import React, { useState, useEffect } from 'react';
import InvestmentCardItem from './InvestmentCardItem';

interface investmentCardsItems {
  heading: string;
  subheading: string;
  backgroundColor: string;
}

interface InvestmentCardsProps {
  investmentCardsData: investmentCardsItems[];
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
  const totalCards = investmentCardsData?.length || 0;

  return (
    <section className="px-[25px] pb-[100px] md:px-[100px]">
      <div className="gap-y-[50px]">
        {investmentCardsData?.investmentCardsItems?.map((card, index) => (
          <InvestmentCardItem key={index} card={card} />
        ))}
      </div>
    </section>
  );
};

export default InvestmentCards;
