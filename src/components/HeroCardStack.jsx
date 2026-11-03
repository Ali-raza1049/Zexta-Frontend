import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Listen to pointer/hover media changes if user docks/undocks or rotates device
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

  // Responsive resting rotations and offsets tuned for laptop (215px) & desktop (260-280px)
  const restingTransforms = {
    left: [
      { transform: 'rotate(-2.5deg) translate(0px, 0px)', zIndex: 3 },
      { transform: 'rotate(2deg) translate(3px, 4px)', zIndex: 2 },
      { transform: 'rotate(-1.5deg) translate(6px, 8px)', zIndex: 1 },
    ],
    right: [
      { transform: 'rotate(2.5deg) translate(0px, 0px)', zIndex: 3 },
      { transform: 'rotate(-2deg) translate(-3px, 4px)', zIndex: 2 },
      { transform: 'rotate(1.5deg) translate(-6px, 8px)', zIndex: 1 },
    ],
  };

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
        // Tapping top card advances to the next review
        setTopCardIdx((prev) => (prev + 1) % cards.length);
      } else {
        // Tapping a peeked background card brings it to the top
        setTopCardIdx(idx);
      }
    }
  };

  // Only expand on hover if device has genuine mouse hover capability
  const isExpanded = allowExpand && hasHoverSupport && isDeckHovered;

  const getCardStyle = (idx) => {
    const isThisCardHovered = hoveredCardIdx === idx;
    const order = getCardOrder(idx);

    // Resting stacked state
    if (!isExpanded) {
      const resting = restingTransforms[side]?.[order] || {
        transform: `rotate(${order === 1 ? '2deg' : '-2deg'}) translate(${order * 3}px, ${order * 4}px)`,
        zIndex: 10 - order,
      };

      return {
        transform: resting.transform,
        zIndex: resting.zIndex,
        opacity: order > 2 ? 0 : 1,
      };
    }

    // Hovered/Expanded state: vertical offset
    const verticalOffset = idx * 165;

    if (isThisCardHovered) {
      return {
        transform: `translateY(${verticalOffset - 3}px) scale(1.02)`,
        zIndex: 50,
      };
    }

    return {
      transform: `translateY(${verticalOffset}px) scale(1)`,
      zIndex: 10 + idx,
    };
  };

  return (
    <div
      className={`select-none side-${side} relative w-full pt-0.5 transition-all duration-500 ease-out ${className}`}
      onMouseEnter={() => {
        if (hasHoverSupport && allowExpand) setIsDeckHovered(true);
      }}
      onMouseLeave={() => {
        setIsDeckHovered(false);
        setHoveredCardIdx(null);
      }}
    >
      {/* Cards Canvas: expands smoothly from ~195px to 500px on desktop mouse hover */}
      <div
        className={`relative w-full transition-all duration-500 ease-out ${
          isExpanded ? 'h-[500px]' : 'h-[195px] sm:h-[200px]'
        }`}
      >
        {cards.map((card, idx) => {
          const style = getCardStyle(idx);
          const isThisCardHovered = hoveredCardIdx === idx;
          const isTop = topCardIdx === idx;

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
              className={`absolute top-0 left-0 right-0 bg-white border rounded-[16px] xl:rounded-[18px] p-2.5 sm:p-3 xl:p-3.5 text-left cursor-pointer flex flex-col justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                isThisCardHovered || (isTop && !isExpanded)
                  ? 'border-[#153C2D]/80 shadow-[0_12px_28px_-6px_rgba(21,60,45,0.18)]'
                  : 'border-[#E2EAE5] shadow-[0_4px_16px_-4px_rgba(18,43,34,0.06)]'
              } ${isThisCardHovered ? 'ring-1.5 ring-[#153C2D]/20' : ''}`}
              style={style}
            >
              {/* Card Header: Author, Role & Verified Review Pill */}
              <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-[#F0F5F2]">
                <div className="flex items-center gap-1.5 xl:gap-2 min-w-0">
                  {/* Gradient Initials Badge */}
                  <div className="w-5 h-5 xl:w-6 xl:h-6 rounded-full bg-gradient-to-br from-[#122B22] to-[#1E4D3B] text-white text-[8px] xl:text-[9px] font-bold font-sans flex items-center justify-center shrink-0 border border-emerald-100 shadow-2xs">
                    {card.initials || 'CL'}
                  </div>

                  <div className="flex flex-col min-w-0">
                    <h4 className="text-[10.5px] xl:text-[11.5px] font-bold text-[#0F1E17] font-sans truncate leading-tight tracking-tight">
                      {card.author}
                    </h4>
                    <p className="text-[8.5px] xl:text-[9.5px] text-[#55665D] font-medium font-sans truncate leading-tight mt-0.5">
                      {card.role}
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[7.5px] xl:text-[8.5px] font-semibold text-[#0E6C38] bg-[#EAF7EE] border border-[#C9EAD5] px-1.5 xl:px-2 py-0.5 rounded-full shrink-0 font-sans shadow-2xs">
                  <CheckCircle2 className="w-2.5 h-2.5 text-[#14A800] shrink-0" />
                  <span className="whitespace-nowrap">{card.verifiedLabel || 'Verified'}</span>
                </span>
              </div>

              {/* Impact Metric Strip */}
              <div className="my-1.5 py-1 px-2 xl:px-2.5 bg-[#F6FAF7] border border-[#E3EDE6] rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-[11px] xl:text-[11.5px] font-bold text-[#0F1E17] font-sans tracking-tight leading-none">
                    {card.metric}
                  </span>
                  <span className="text-[11px] xl:text-[11.5px] font-medium text-[#495D53] font-sans tracking-tight truncate leading-none">
                    {card.metricLabel}
                  </span>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400 shrink-0 ml-1">
                  {[...Array(card.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quotation text */}
              <p className="text-[9.5px] xl:text-[10.5px] leading-[1.4] xl:leading-[1.5] text-[#34483E] font-normal font-sans italic mb-1.5 line-clamp-3">
                “{card.quote}”
              </p>

              {/* Bottom Tag & Deck Indicator */}
              <div className="flex items-center justify-between pt-1.5 border-t border-[#EEF4F0] text-[8.5px] xl:text-[9px] text-[#63756C] font-sans">
                <span className="font-bold text-[#122B22] font-sans truncate max-w-[110px] xl:max-w-[160px]">
                  {card.tag}
                </span>
                <span className="text-[#71857A] text-[8px] xl:text-[8.5px] font-semibold font-sans shrink-0">
                  {isExpanded ? 'Verified' : hasHoverSupport ? 'Expand ↗' : 'Tap to flip'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Navigation Dots & Controls: Only shown on mobile when requested or when showControls is true */}
      {showControls && (
        <div
          className={`items-center justify-between px-1 pt-2 sm:pt-2.5 ${
            showControls === 'mobile-only' ? 'flex lg:hidden' : showControls === true ? 'flex' : 'hidden'
          }`}
        >
          <div className="flex items-center gap-1.5">
            {cards.map((_, dotIdx) => {
              const isActive = topCardIdx === dotIdx;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setTopCardIdx(dotIdx);
                  }}
                  aria-label={`Show review ${dotIdx + 1} of ${cards.length}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'w-5 sm:w-6 bg-[#153C2D]'
                      : 'w-1.5 bg-[#CBDDD2] hover:bg-[#9BB8A5]'
                  }`}
                />
              );
            })}
            <span className="text-[9.5px] text-[#607469] font-medium font-sans ml-1">
              {topCardIdx + 1}/{cards.length}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white hover:bg-[#EAF3EE] border border-[#D8E6DE] text-[#122B22] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white hover:bg-[#EAF3EE] border border-[#D8E6DE] text-[#122B22] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
