import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 glassmorphism border-b-0">
      <div className="flex items-center p-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-white text-3xl">hub</span>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1">AI Gen</h2>
        </div>
      </div>
    </header>
  );
}
