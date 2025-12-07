import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 py-10">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-white/80 text-2xl">hub</span>
          <p className="text-white/80 text-base font-medium">AI Gen</p>
        </div>

        <div className="flex gap-6">
          <a className="text-white/60 hover:text-white" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h11.23v-9.46H9.98v-3.64h3.02V8.21c0-3.02 1.8-4.66 4.54-4.66 1.3 0 2.68.23 2.68.23v3.1h-1.58c-1.48 0-1.92.9-1.92 1.83v2.24h3.45l-.55 3.64h-2.9V24h5.95c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0z"></path></svg></a>
          <a className="text-white/60 hover:text-white" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 14.86c-1.07 1.07-2.48 1.64-3.95 1.64s-2.88-.57-3.95-1.64c-2.14-2.14-2.14-5.62 0-7.76 1.07-1.07 2.48-1.64 3.95-1.64s2.88.57 3.95 1.64c2.14 2.14 2.14 5.62 0 7.76z"></path></svg></a>
          <a className="text-white/60 hover:text-white" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.37-.21-1.95-.54v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06A12.07 12.07 0 0 0 8.81 20c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.98-2.02z"></path></svg></a>
        </div>

        <div className="flex gap-4 text-sm text-white/60">
          <a className="hover:text-white" href="#">Privacy Policy</a>
          <a className="hover:text-white" href="#">Terms of Service</a>
        </div>

        <p className="text-xs text-white/40">© 2024 AI Gen. All rights reserved.</p>
      </div>
    </footer>
  );
}
