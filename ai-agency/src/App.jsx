import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeBuild from "./components/WhatWeBuild";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Inline original styles preserved exactly (Option B) */}
      <style>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        body {
          min-height: max(884px, 100dvh);
        }
      `}</style>

      <div className="relative flex min-h-screen w-full flex-col bg-background-dark dark group/design-root overflow-x-hidden font-display">
        {/* Background blobs preserved */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-cyber-pink/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric-purple/20 rounded-full filter blur-3xl opacity-50"></div>
        </div>

        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <WhatWeBuild />
            <Features />
            <ContactUs />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
