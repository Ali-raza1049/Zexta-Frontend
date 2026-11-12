import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { upworkLeftReviews, upworkRightReviews } from '../data/upworkReviews';

export default function HeroCardStack({
  side = 'left',
  cards = side === 'left' ? upworkLeftReviews : upworkRightReviews,
  allowExpand = true,
  showControls = 'mobile-only',
  className = '',
}) {
  const [isDeckHovered, setIsDeckHovered] = useState(false);
  const [hoveredCardIdx, setHoveredCardIdx] = useState(null);
  const [topCardIdx, setTopCardIdx] = useState(0);
  const [hasHoverSupport, setHasHoverSupport] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }
    return true;
  });

  // Detect mouse hover capability (prevents layout jump on mobile taps)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const match = window.matchMedia('(hover: hover) and (pointer: fine)');
      const handleMediaChange = (e) => setHasHoverSupport(e.matches);
      if (match.addEventListener) {
        match.addEventListener('change', handleMediaChange);
        return () => match.removeEventListener('change', handleMediaChange);
      }
    }
  }, []);

  const getCardOrder = (idx) => {
    return (idx - topCardIdx + cards.length) % cards.length;
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setTopCardIdx((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setTopCardIdx((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleCardClick = (idx) => {
    if (isExpanded) {
      setTopCardIdx(idx);
    } else {
      if (topCardIdx === idx) {
        setTopCardIdx((prev) => (prev + 1) % cards.length);
      } else {
        setTopCardIdx(idx);
      }
    }
  };

  // Only expand downwards on genuine mouse hover
  const isExpanded = allowExpand && hasHoverSupport && isDeckHovered;

  // Exact Figma card dimensions
  const cardWidth = 221.33;
  const cardHeight = 133.33;
  const cardGap = 8;
  const verticalStep = cardHeight + cardGap; // 141.33px per slot

  // Exact Figma angles (Left: 14.92 deg CCW -> -14.92deg CSS; Right: -10.14 deg CW -> 10.14deg CSS)
  const restingTransforms = {
    left: [
      { transform: 'rotate(-14.92deg) translate(0px, 0px)', zIndex: 30 },
      { transform: 'rotate(-4deg) translate(6px, -4px)', zIndex: 20 },
      { transform: 'rotate(5deg) translate(-6px, 4px)', zIndex: 10 },
    ],
    right: [
      { transform: 'rotate(10.14deg) translate(0px, 0px)', zIndex: 30 },
      { transform: 'rotate(2deg) translate(-6px, -4px)', zIndex: 20 },
      { transform: 'rotate(-5.5deg) translate(6px, 4px)', zIndex: 10 },
    ],
  };

  const getCardStyle = (idx) => {
    const isThisCardHovered = hoveredCardIdx === idx;
    const order = getCardOrder(idx);

    // 1. Compact stacked deck state at rest
    if (!isExpanded) {
      const resting = restingTransforms[side]?.[order] || {
        transform: `rotate(${order === 1 ? '3deg' : '-3deg'}) translate(${order * 4}px, ${order * 4}px)`,
        zIndex: 10 - order,
      };

      return {
        transform: resting.transform,
        zIndex: resting.zIndex,
        opacity: order > 2 ? 0 : 1,
        pointerEvents: order > 2 ? 'none' : 'auto',
      };
    }

    // 2. Hover-expanded cascade: all 3 cards glide smoothly downward while container height grows so below screens never overlap
    const verticalOffset = idx * verticalStep;

    if (isThisCardHovered) {
      return {
        transform: `translateY(${verticalOffset - 2}px) rotate(0deg) scale(1.02)`,
        zIndex: 60,
        opacity: 1,
      };
    }

    return {
      transform: `translateY(${verticalOffset}px) rotate(0deg) scale(1)`,
      zIndex: 40 + idx,
      opacity: 1,
    };
  };

  return (
    <div
      className={`group/deck select-none relative w-full pt-1 transition-all duration-300 ease-out ${
        isExpanded ? 'z-50' : 'z-30'
      } ${className}`}
      onMouseEnter={() => {
        if (hasHoverSupport) setIsDeckHovered(true);
      }}
      onMouseLeave={() => {
        setIsDeckHovered(false);
        setHoveredCardIdx(null);
      }}
    >
      {/* Cards Canvas: smoothly expands height on hover so the below screen moves out of the way and cards NEVER sit on top of it */}
      <div
        className="relative w-full transition-[height] duration-300 ease-out flex justify-center overflow-visible"
        style={{
          height: isExpanded ? `${cards.length * verticalStep - cardGap}px` : '156px',
        }}
      >
        {isExpanded && (
          <div
            className="absolute inset-x-0 top-0 pointer-events-auto z-0"
            style={{ height: `${cards.length * verticalStep}px` }}
            aria-hidden="true"
          />
        )}

        {cards.map((card, idx) => {
          const style = getCardStyle(idx);
          const isThisCardHovered = hoveredCardIdx === idx;
          const isTop = topCardIdx === idx;
          const order = getCardOrder(idx);

          // Hide cards beyond 3 in resting stack to maintain minimal aesthetic
          if (!isExpanded && order > 2) return null;

          return (
            <div
              key={card.id || idx}
              onClick={() => handleCardClick(idx)}
              onMouseEnter={() => {
                if (hasHoverSupport) setHoveredCardIdx(idx);
              }}
              onMouseLeave={() => {
                if (hasHoverSupport) setHoveredCardIdx(null);
              }}
              className="absolute top-0 cursor-pointer transition-all duration-300 ease-out will-change-transform [text-rendering:optimizeLegibility] antialiased"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                borderRadius: '16px',
                background: '#FFFFFF',
                borderWidth: isThisCardHovered ? '0.75px' : '0.5px',
                borderStyle: 'solid',
                borderColor: isThisCardHovered ? 'rgba(16, 185, 129, 0.65)' : '#9FAAC1',
                boxShadow: isThisCardHovered
                  ? '0 16px 36px -6px rgba(15, 30, 23, 0.16), 0 4px 12px -2px rgba(16, 185, 129, 0.15)'
                  : isExpanded
                  ? '0 12px 28px -6px rgba(159, 170, 193, 0.34), 0 4px 10px -2px rgba(159, 170, 193, 0.2)'
                  : isTop && !isExpanded
                  ? '0 10px 24px -4px rgba(159, 170, 193, 0.34), 0 3px 8px -2px rgba(159, 170, 193, 0.2)'
                  : '0 6px 18px -4px rgba(159, 170, 193, 0.26), 0 2px 6px -1px rgba(159, 170, 193, 0.15)',
                opacity: 1,
                ...style,
              }}
            >
              <div
                className="w-full h-full flex flex-col justify-center text-left"
                style={{
                  paddingLeft: '26.67px',
                  paddingRight: '26.67px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  gap: '2.67px',
                }}
              >
                {/* Review Quote + Aesthetic Quote Mark (#9FAAC1) */}
                <div className="flex items-start justify-between gap-1.5">
                  <p
                    className="leading-[1.36] text-[#556070] font-medium tracking-tight pr-0.5"
                    style={{
                      fontSize: '10.5px',
                      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {card.quote}
                  </p>
                  <svg
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 select-none mt-0.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.75 0C1.68 0 0 1.68 0 3.75C0 5.4 1.05 6.8 2.5 7.28L1.6 10.5C1.48 10.9 1.78 11.3 2.2 11.3H3.4C3.68 11.3 3.93 11.12 4.03 10.85L5.45 6.7C5.65 6.1 5.75 5.5 5.75 4.88V1.5C5.75 0.67 5.08 0 4.25 0H3.75ZM11.75 0C9.68 0 8 1.68 8 3.75C8 5.4 9.05 6.8 10.5 7.28L9.6 10.5C9.48 10.9 9.78 11.3 10.2 11.3H11.4C11.68 11.3 11.93 11.12 12.03 10.85L13.45 6.7C13.65 6.1 13.75 5.5 13.75 4.88V1.5C13.75 0.67 13.08 0 12.25 0H11.75Z"
                      fill="#9FAAC1"
                    />
                  </svg>
                </div>

                {/* Only Client Name: • Karin Gabriella */}
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[#111827] font-black text-[10px] leading-none select-none">•</span>
                  <span
                    className="font-bold text-[#111827] truncate"
                    style={{
                      fontSize: '11.2px',
                      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    }}
                  >
                    {card.author}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sleek Minimal Indicators & Arrows */}
      {showControls && (
        <div
          className={`items-center justify-between px-3 pt-2 sm:pt-2.5 transition-opacity duration-200 ${
            showControls === 'mobile-only'
              ? 'flex lg:hidden'
              : showControls === 'hover-only'
              ? 'flex opacity-0 group-hover/deck:opacity-100'
              : showControls === true
              ? 'flex'
              : 'hidden'
          }`}
        >
          <div className="flex items-center gap-1.5">
            {cards.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setTopCardIdx(dotIdx);
                }}
                aria-label={`Go to review ${dotIdx + 1}`}
                className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                  topCardIdx === dotIdx
                    ? 'w-5 bg-[#08150E]'
                    : 'w-1 bg-[#CBDCD1] hover:bg-[#9BB8A5]'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-5 h-5 rounded-full bg-white hover:bg-[#EAF3EE] border border-[#D8E6DE] text-[#08150E] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="w-5 h-5 rounded-full bg-white hover:bg-[#EAF3EE] border border-[#D8E6DE] text-[#08150E] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
