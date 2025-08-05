import React from 'react';

interface TimelineProps {
  totalItems: number;
  scrollProgress: number; // 0 to 1
  isDesktop: boolean;
  filledItemIndex: number;
  mobileCircleFromTop: number;
  cardHeights: number[];
}

const Timeline: React.FC<TimelineProps> = ({
  totalItems,
  scrollProgress,
  isDesktop,
  filledItemIndex,
  mobileCircleFromTop,
  cardHeights,
}) => {
  const lineFillPercentage = scrollProgress * 100;

  return (
    <div
      className={`absolute top-0 h-full w-[1px] ${isDesktop ? 'left-1/2 -translate-x-1/2' : 'left-[6px]'} bg-[#E5E5E5]`}
    >
      {/* Filled line */}
      <div
        className="bg-champagne-gold absolute top-0 left-0 w-full transition-all duration-300 ease-out"
        style={{
          height: `${lineFillPercentage}%`,
          width: '3px',
          left: '-1px',
        }}
      />

      {/* Circles */}
      {Array.from({ length: totalItems }).map((_, index) => {
        const isFilled = index <= filledItemIndex;

        // Calculate the top position by summing the heights of previous cards
        const mobileMargin = isDesktop ? 0 : 75; // Add 75px margin for mobile
        const topPosition = cardHeights
          .slice(0, index)
          .reduce((acc, height) => acc + height + mobileMargin, 0);

        const circleOffset = isDesktop ? cardHeights[index] / 2 : mobileCircleFromTop;

        return (
          <div
            key={index}
            className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 transition-[background-color] duration-300 ease-out ${
              isFilled ? 'bg-champagne-gold border-champagne-gold' : 'border-[#E5E5E5] bg-white'
            }`}
            style={{
              top: `${topPosition + circleOffset}px`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
