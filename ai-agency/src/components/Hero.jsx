import React from "react";

export default function Hero() {
  return (
    <section className="@container py-16">
      <div className="px-4">
        <div className="flex min-h-[480px] flex-col gap-8 items-center justify-center text-center p-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
              Building the Future… One Bot at a Time
            </h1>
            <p className="text-white/80 text-base font-normal leading-normal @[480px]:text-lg">
              We help businesses by automating processes and building custom AI solutions.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gradient-to-r from-neon-blue to-electric-purple text-white text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Get Started</span>
            </button>
            <button className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-white/10 text-white text-base font-bold leading-normal tracking-[0.015em] border border-white/20">
              <span className="truncate">Book a Free Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
