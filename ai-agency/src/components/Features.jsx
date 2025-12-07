import React from "react";

export default function Features() {
  return (
    <section className="flex flex-col gap-10 px-4 py-16 @container">
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl">
          Why Partner With Us?
        </h1>
        <p className="text-white/80 text-base font-normal leading-normal max-w-[720px]">
          We combine expertise with innovation to deliver AI solutions that drive real results for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
        <div className="flex items-start gap-4 ">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neon-blue/10 border border-neon-blue/30">
            <span className="material-symbols-outlined text-neon-blue">groups</span>
          </div>
          <div>
            <p className="text-white text-base font-medium leading-normal">Expert Team</p>
            <p className="text-white/70 text-sm font-normal leading-normal">Our developers are leaders in the AI and automation space.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neon-blue/10 border border-neon-blue/30">
            <span className="material-symbols-outlined text-neon-blue">shapes</span>
          </div>
          <div>
            <p className="text-white text-base font-medium leading-normal">Custom Solutions</p>
            <p className="text-white/70 text-sm font-normal leading-normal">We build solutions tailored specifically to your unique challenges.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-neon-blue/10 border border-neon-blue/30">
            <span className="material-symbols-outlined text-neon-blue">trending_up</span>
          </div>
          <div>
            <p className="text-white text-base font-medium leading-normal">Proven ROI</p>
            <p className="text-white/70 text-sm font-normal leading-normal">Our automations are designed to increase efficiency and profitability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
