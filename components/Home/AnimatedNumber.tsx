import { useEffect, useRef, useState } from 'react';

interface NumberParts {
  prefix: string;
  number: string;
  suffix: string;
  hasNumber: boolean;
}

const AnimatedNumber = ({ value }: { value: string }) => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [parts, setParts] = useState<NumberParts>({
    prefix: '',
    number: '0',
    suffix: '',
    hasNumber: false,
  });
  const nodeRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  // Parse the value into parts on mount and when value changes
  useEffect(() => {
    const match = value.match(/([^\d.]*)(\d+(?:\.\d+)?)([^\d.]*)/);
    if (match) {
      const [, prefix = '', number = '', suffix = ''] = match;
      setParts({
        prefix,
        number,
        suffix,
        hasNumber: !!number,
      });
      setCurrentNumber('0');
    } else {
      // If no number found, just display the original value
      setParts({
        prefix: value,
        number: '',
        suffix: '',
        hasNumber: false,
      });
    }
  }, [value]);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || !parts.hasNumber) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          // Unobserve immediately so this only runs once
          observer.unobserve(node);

          const numValue = parseFloat(parts.number);
          if (isNaN(numValue)) return;

          const duration = 2000; // 2 seconds
          const startTime = performance.now();
          const decimalPlaces = parts.number.includes('.') ? parts.number.split('.')[1].length : 0;

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            let currentValue = progress * numValue;

            // Format the number with the same number of decimal places as the original
            const formattedValue =
              decimalPlaces > 0
                ? currentValue.toFixed(decimalPlaces)
                : Math.floor(currentValue).toString();

            setCurrentNumber(formattedValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentNumber(parts.number);
            }
          };

          // Start animation
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [parts]);

  // If no number to animate, just return the original value
  if (!parts.hasNumber) {
    return <span ref={nodeRef}>{value}</span>;
  }

  return (
    <span ref={nodeRef}>
      {parts.prefix}
      <span className="inline-block min-w-[1ch] text-center">{currentNumber}</span>
      {parts.suffix}
    </span>
  );
};

export default AnimatedNumber;
