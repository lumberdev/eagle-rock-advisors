import React, { useRef, useEffect, useState } from 'react';
import CTAButton from '../General/CTAButton';
import HistoryCard from './HistoryCard';
import Timeline from './Timeline';
import useWindowDimensions from '@/utils/useWindowDimensions';
import { PageHistory } from '@/tina/__generated__/types';

const mobileCardHeight = 450;
const desktopCardHeight = 450;
const cardHeightClass = 'min-h-[450px] h-[450px] lg:h-[450px]';
const desktopCircleFromTop = desktopCardHeight / 2; // 225px
const mobileCircleFromTop = 40; // 13.33% from the top to align with the year text

const History = ({ historyData }: { historyData: PageHistory }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { isDesktop } = useWindowDimensions();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { top, bottom } = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerTop = top + window.scrollY;
      const containerBottom = bottom + window.scrollY;
      const scrollPosition = window.scrollY;

      // Calculate when the container enters and exits the viewport
      const containerStart = containerTop - windowHeight * 0.6;
      const containerEnd = containerBottom - windowHeight * 0.4;
      const scrollDistance = containerEnd - containerStart;

      if (scrollPosition >= containerStart && scrollPosition <= containerEnd) {
        const progress = (scrollPosition - containerStart) / scrollDistance;
        setScrollProgress(Math.min(1, Math.max(0, progress)));
      } else if (scrollPosition < containerStart) {
        setScrollProgress(0);
      } else if (scrollPosition > containerEnd) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = historyData?.historyItems?.length || 0;
  const filledItemIndex = Math.min(
    scrollProgress * totalItems - (isDesktop ? 0.5 : 0.1333),
    totalItems - 1
  );

  return (
    <section className="relative py-20">
      <div className="relative flex w-full flex-col items-center justify-center gap-y-[25px] px-[25px] md:px-[100px] lg:gap-y-[50px]">
        <h6 className="font-monaSans text-slate text-[14px] leading-[140%] tracking-[1.6px] uppercase opacity-50 lg:self-start lg:text-[1rem]">
          {historyData?.heading}
        </h6>
        <h4 className="font-makarony text-eagle-navy max-w-[30ch] text-center text-[28px] leading-[140%] tracking-[0] lg:text-[48px]">
          {historyData?.subHeading}
        </h4>
        <CTAButton cta={historyData?.cta} style="max-w-[250px]" />
        <div className="relative mt-16">
          {/* Single timeline for all cards */}
          <Timeline
            totalItems={totalItems}
            filledItemIndex={filledItemIndex}
            scrollProgress={scrollProgress}
            isDesktop={isDesktop}
            desktopCircleFromTop={desktopCircleFromTop}
            mobileCircleFromTop={mobileCircleFromTop}
            desktopCardHeight={desktopCardHeight}
            mobileCardHeight={mobileCardHeight}
          />

          {/* History cards */}
          <div ref={containerRef} className="relative">
            {historyData?.historyItems?.map((item: any, index: number) => (
              <HistoryCard
                key={index}
                historyItem={item}
                index={index}
                cardHeightClass={cardHeightClass}
                filledItemIndex={filledItemIndex}
                lastItem={index === totalItems - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
