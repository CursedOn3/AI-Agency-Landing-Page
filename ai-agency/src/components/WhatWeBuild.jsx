import React from "react";

export default function WhatWeBuild() {
  return (
    <section className="py-10">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-5">What We Build</h2>

      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-4">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-xl min-w-60 glassmorphism p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-neon-blue text-3xl">smart_toy</span>
              <p className="text-white text-base font-medium leading-normal">AI Chatbots</p>
            </div>
            <p className="text-white/70 text-sm font-normal leading-normal">Engage your customers 24/7 with intelligent, human-like chatbots.</p>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4 rounded-xl min-w-60 glassmorphism p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-neon-blue text-3xl">sync</span>
              <p className="text-white text-base font-medium leading-normal">Automation</p>
            </div>
            <p className="text-white/70 text-sm font-normal leading-normal">Streamline your workflows and increase efficiency with custom automation.</p>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4 rounded-xl min-w-60 glassmorphism p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-neon-blue text-3xl">code</span>
              <p className="text-white text-base font-medium leading-normal">Web Development</p>
            </div>
            <p className="text-white/70 text-sm font-normal leading-normal">Modern, responsive websites integrated with powerful AI features.</p>
          </div>

          <div className="flex h-full flex-1 flex-col gap-4 rounded-xl min-w-60 glassmorphism p-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-neon-blue text-3xl">analytics</span>
              <p className="text-white text-base font-medium leading-normal">Data Tools</p>
            </div>
            <p className="text-white/70 text-sm font-normal leading-normal">Unlock insights from your data with our advanced analytics tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
