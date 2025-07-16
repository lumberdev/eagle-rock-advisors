import React, { useEffect, useState } from 'react';
import CTAButton from '../General/CTAButton';
import HistoryCard from './HistoryCard';

const History = ({ historyData }: { historyData: any }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollProgress = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress (0 to 1) for the entire history section
      const start = container.offsetTop + 50;
      const end = start + container.offsetHeight - windowHeight;
      const currentScroll = lastScrollY;

      let progress = 0;
      if (currentScroll >= start && currentScroll <= end) {
        progress = (currentScroll - start) / (end - start);
      } else if (currentScroll > end) {
        progress = 1;
      }

      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        animationFrameId = requestAnimationFrame(updateScrollProgress);
      }
    };

    // Use both scroll and wheel events for more frequent updates
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    // Initial call
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={containerRef} className="px-[25px] pb-[100px] md:px-[100px]">
      <h6 className="font-monaSans text-slate text-[1rem] leading-[140%] tracking-[1.6px] uppercase opacity-50">
        {historyData?.heading}
      </h6>
      <div className="flex flex-col items-center justify-center gap-y-[50px]">
        <h4 className="font-dreaming text-eagle-navy max-w-[30ch] text-center text-[48px] leading-[140%] tracking-[0]">
          {historyData?.subHeading}
        </h4>
        <CTAButton cta={historyData?.cta} />
        <div className="relative flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 z-5 h-[25px] w-full lg:h-[150px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 0) 100%)',
            }}
          />
          {historyData?.historyItems?.map((historyItem: any, index: number) => (
            <HistoryCard
              key={index}
              historyItem={historyItem}
              index={index}
              totalItems={historyData.historyItems.length}
              scrollProgress={scrollProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
