import React, { useRef, useEffect, useState } from "react";

export default function WhatWeBuild() {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollTimeoutRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const autoScroll = () => {
      if (!isAutoScrolling) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 280, behavior: 'smooth' });
      }
    };

    const intervalId = setInterval(autoScroll, 3000);

    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsAutoScrolling(false);
      
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }

      autoScrollTimeoutRef.current = setTimeout(() => {
        setIsAutoScrolling(true);
      }, 5000);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsAutoScrolling(false);
    const scrollAmount = direction === 'left' ? -340 : 340;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }

    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
  };

  return (
    <section id="works" className="py-10 relative">
      <h2 className="justify-center text-center text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5">What We Build</h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-electric-purple/80 hover:bg-electric-purple text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="Previous"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex items-stretch p-4 gap-6">
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl min-w-80 glassmorphism p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neon-blue text-4xl">smart_toy</span>
                <p className="text-white text-lg font-medium leading-normal">AI Chatbots</p>
              </div>
              <p className="text-white/70 text-base font-normal leading-normal">Engage your customers 24/7 with intelligent, human-like chatbots.</p>
            </div>

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl min-w-80 glassmorphism p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neon-blue text-4xl">sync</span>
                <p className="text-white text-lg font-medium leading-normal">Automation</p>
              </div>
              <p className="text-white/70 text-base font-normal leading-normal">Streamline your workflows and increase efficiency with custom automation.</p>
            </div>

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl min-w-80 glassmorphism p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neon-blue text-4xl">code</span>
                <p className="text-white text-lg font-medium leading-normal">Web Development</p>
              </div>
              <p className="text-white/70 text-base font-normal leading-normal">Modern, responsive websites integrated with powerful AI features.</p>
            </div>

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl min-w-80 glassmorphism p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neon-blue text-4xl">analytics</span>
                <p className="text-white text-lg font-medium leading-normal">Data Tools</p>
              </div>
              <p className="text-white/70 text-base font-normal leading-normal">Unlock insights from your data with our advanced analytics tools.</p>
            </div>

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl min-w-80 glassmorphism p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neon-blue text-4xl">psychology</span>
                <p className="text-white text-lg font-medium leading-normal">AI Agents</p>
              </div>
              <p className="text-white/70 text-base font-normal leading-normal">Autonomous AI agents that handle complex tasks and decision-making.</p>
            </div>

            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl min-w-80 glassmorphism p-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-neon-blue text-4xl">computer</span>
                <p className="text-white text-lg font-medium leading-normal">Softwares</p>
              </div>
              <p className="text-white/70 text-base font-normal leading-normal">Custom software solutions tailored to your business needs.</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-electric-purple/80 hover:bg-electric-purple text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="Next"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
