'use client';

import { useState, useRef, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Mettre à jour l'état des boutons et l'index actuel lors du scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const updateButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanGoPrev(scrollLeft > 10);
      setCanGoNext(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calculer l'index actuel
      const itemWidth = container.children[0]?.clientWidth || 0;
      const gap = parseInt(getComputedStyle(container).gap) || 0;
      const itemWithGap = itemWidth + gap;
      const newIndex = Math.round(scrollLeft / itemWithGap);
      setCurrentIndex(newIndex);
    };

    updateButtons();
    container.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    
    return () => {
      container.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, [testimonials.length]);

  const goToPrev = () => {
    if (!scrollContainerRef.current || !canGoPrev) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.children[0]?.clientWidth || 0;
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    const scrollAmount = (itemWidth + gap) * 1;
    
    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  };

  const goToNext = () => {
    if (!scrollContainerRef.current || !canGoNext) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.children[0]?.clientWidth || 0;
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    const scrollAmount = (itemWidth + gap) * 1;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  const goToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = container.children[0]?.clientWidth || 0;
    const gap = parseInt(getComputedStyle(container).gap) || 0;
    const scrollAmount = (itemWidth + gap) * index;
    
    container.scrollTo({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {/* Masques de dégradé pour effet fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
      
      {/* Conteneur principal */}
      <div className="relative px-12 sm:px-16 md:px-20">
        {/* Bouton précédent */}
        <button
          onClick={goToPrev}
          disabled={!canGoPrev}
          aria-label="Témoignage précédent"
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-white/50 bg-white/90 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:border-orange-500/60 hover:shadow-[0_8px_24px_rgba(253,89,4,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 group`}
        >
          <svg
            className="h-6 w-6 sm:h-7 sm:w-7 text-gray-700 transition-colors duration-300 group-hover:text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Conteneur de défilement */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative flex-shrink-0 w-[90vw] sm:w-[50vw] md:w-[35vw] lg:w-[30vw] rounded-2xl sm:rounded-3xl border-2 border-white/50 bg-gradient-to-br from-white/60 via-white/50 to-orange-50/30 px-6 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:border-orange-500/40 hover:bg-gradient-to-br hover:from-white/70 hover:via-white/60 hover:to-orange-50/40 hover:shadow-[0_30px_70px_rgba(253,89,4,0.15)] snap-start"
            >
              {/* Effet de glow au hover */}
              <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
              
              {/* Quote icon */}
              <div className="mb-4 sm:mb-6 flex justify-end">
                <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400/20 to-orange-300/10 border border-orange-500/20 text-orange-600 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <svg width="18" height="18" className="sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.58 17c-1.6 0-2.905-1.3-2.905-2.9 0-1.6 1.3-2.9 2.905-2.9.43 0 .845.1 1.225.27-.54-1.17-1.685-2-3.03-2.07v-2.2c2.905.14 5.18 2.47 5.18 5.36 0 2.47-2.01 4.44-4.5 4.44zm8.5 0c-1.6 0-2.905-1.3-2.905-2.9 0-1.6 1.305-2.9 2.905-2.9.435 0 .845.1 1.23.27-.54-1.17-1.69-2-3.035-2.07v-2.2c2.905.14 5.18 2.47 5.18 5.36 0 2.47-2.01 4.44-4.5 4.44z" />
                  </svg>
                </span>
              </div>
              
              {/* Quote text */}
              <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-gray-900 mb-6 sm:mb-8 group-hover:text-gray-950 transition-colors duration-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-white/30">
                <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 text-base sm:text-lg md:text-xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{testimonial.name.split(',')[0]}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{testimonial.name.split('@')[1]?.trim()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton suivant */}
        <button
          onClick={goToNext}
          disabled={!canGoNext}
          aria-label="Témoignage suivant"
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-white/50 bg-white/90 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white hover:border-orange-500/60 hover:shadow-[0_8px_24px_rgba(253,89,4,0.25)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 group`}
        >
          <svg
            className="h-6 w-6 sm:h-7 sm:w-7 text-gray-700 transition-colors duration-300 group-hover:text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicateurs de pagination */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Aller au témoignage ${index + 1}`}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 sm:w-10 bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-500/40'
                : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

