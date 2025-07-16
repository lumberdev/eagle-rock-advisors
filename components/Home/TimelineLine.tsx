'use client';

import React, { useEffect, useRef, useState } from 'react';

// Easing function for smoother animation
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
};

interface TimelineLineProps {
  index: number;
  totalItems: number;
  scrollProgress: number; // 0 to 1 representing the overall scroll progress
  isDesktop: boolean;
}

const TimelineLine: React.FC<TimelineLineProps> = ({
  index,
  totalItems,
  scrollProgress,
  isDesktop,
}) => {
  const [fillHeight, setFillHeight] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add a small overlap factor to ensure smooth transitions (5% of segment)
    const overlapFactor = 5;
    const segmentSize = 1 / totalItems;

    // Calculate the start and end points for this card's segment with overlap
    const segmentStart = index / totalItems - (index > 0 ? overlapFactor * segmentSize : 0);
    const segmentEnd =
      (index + 1) / totalItems + (index < totalItems - 1 ? overlapFactor * segmentSize : 0);

    // Calculate how much of this segment is filled (0 to 1)
    let segmentFill = 0;

    if (scrollProgress <= segmentStart) {
      // Before this segment starts
      segmentFill = 0;
    } else if (scrollProgress >= segmentEnd) {
      // After this segment ends
      segmentFill = 1;
    } else {
      // Within this segment - adjust the fill to account for overlap
      const adjustedStart = segmentStart + (index > 0 ? overlapFactor * segmentSize : 0);
      const adjustedEnd = segmentEnd - (index < totalItems - 1 ? overlapFactor * segmentSize : 0);

      if (scrollProgress <= adjustedStart) {
        // In the overlap zone at the start
        segmentFill = 0;
      } else if (scrollProgress >= adjustedEnd) {
        // In the overlap zone at the end
        segmentFill = 1;
      } else {
        // In the main segment
        segmentFill = (scrollProgress - adjustedStart) / (adjustedEnd - adjustedStart);
      }
    }

    // Convert to percentage with easing for smoother animation
    const easedFill = easeInOutCubic(segmentFill);
    setFillHeight(easedFill * 100);
  }, [scrollProgress, index, totalItems]);

  // Check if the progress has reached this circle (fill when line is at least 50% filled)
  const circlePosition = isDesktop ? 50 : 14;
  const isFilled = fillHeight >= circlePosition;

  return (
    <div className={`absolute top-0 left-[6px] h-full w-[1px] bg-[#E5E5E5] lg:left-1/2`}>
      <div
        ref={lineRef}
        className="bg-champagne-gold absolute left-[-1px] w-[3px] transition-all duration-300 ease-out"
        style={{
          height: `${fillHeight}%`,
          top: 0,
        }}
      />
      <div
        className={`absolute top-[14%] left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 transition-all duration-300 ease-out lg:top-1/2 ${isFilled ? 'bg-champagne-gold border-champagne-gold' : 'border-[#E5E5E5] bg-white'}`}
      />
    </div>
  );
};

export default TimelineLine;
